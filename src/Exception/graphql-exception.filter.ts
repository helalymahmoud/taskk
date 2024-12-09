
import { ArgumentsHost, Catch, HttpException,  } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { log } from 'console';
import { response,  } from 'express';

@Catch()
// @Injectable()
export class GraphQLExceptisonFilter implements GqlExceptionFilter {
  private localRes={
    message:' errorrrrrrrs',
    success:false,
    code:504
  }
  catch(exception: any, host: ArgumentsHost) {

    console.log('HttpException detected:', response);




    const context =  GqlArgumentsHost.create(host).getContext()
    // console.log(JSON.stringify(context)
  //   console.dir(context.res,

  //   {
  //     depth:5
  //   }
  // )

    if (exception instanceof HttpException) {
      log(exception)
      log(!!context.res)
      // return null
       return this.localRes
      }

    // Default error format for other exceptions
    return this.localRes
  }
  
}