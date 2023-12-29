import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppMiddleware } from './middleware';
import { ConfigModule } from '@nestjs/config';
import { ConnectionModule } from './connection/connection.module';

@Module({
  imports: [ConfigModule.forRoot(), ConnectionModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(AppMiddleware).forRoutes({
      path: '*',
      method: RequestMethod.ALL,
    });
  }
}
