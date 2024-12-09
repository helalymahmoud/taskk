import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus, 
  } from '@nestjs/common';
  import { Request, Response } from 'express';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception:any, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      if (['graphql'].includes(host.getType())) {
        throw new HttpException(
          this._response(status, request, exception),
          status,
        );
      }

      response.status(status).json(this._response(status, request, exception));
    }
  
    private _response(status: number, request: Request, exception: any) {
      return {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request?.url,
        method: request?.method,
        params: request?.params,
        query: request?.query,
        exception: {
          name: exception['name'],
          message: exception['message'],
        },
      };
    }
  }