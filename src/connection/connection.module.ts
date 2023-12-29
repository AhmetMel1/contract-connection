import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConnectionController } from './connection.controller';
import { ConnectionService } from './connection.service';
import { ConnectionMiddleware } from './connection.middleware';

@Module({
  imports: [],
  controllers: [ConnectionController],
  providers: [ConnectionService],
})
export class ConnectionModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(ConnectionMiddleware).forRoutes(ConnectionController);
  }
}
