import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AppMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction): Promise<void> {
    next();
  }
}
