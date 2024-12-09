import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { NotificationService } from './notification.service';

@Resolver()
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => String)
  async SendNotification(
    @Args('FcmToken') FcmToken: string,
    @Args('Title') title: string,
    @Args('Body') body: string,
  ): Promise<string> {
    await this.notificationService.sendPushNotification(FcmToken, title, body);
    return 'Notification sent!';
  }
}
