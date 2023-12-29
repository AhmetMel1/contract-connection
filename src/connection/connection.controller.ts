import { Controller, Get, Param, Res } from '@nestjs/common';
import { ConnectionService } from './connection.service';
import { Response } from 'express';

@Controller('api/connection')
export class ConnectionController {
  constructor(private connectionService: ConnectionService) {
    this.connectionService = connectionService;
  }

  @Get('balance/:address')
  async addressBalance(
    @Res() res: Response,
    @Param('address') address: string,
  ): Promise<Response<string, Record<string, string | number>>> {
    const balance: string = await this.connectionService.getBalanceOf(address);
    return res.status(200).json({
      timestamp: new Date().toISOString(),
      status: 200,
      message: '',
      data: balance,
    });
  }
}
