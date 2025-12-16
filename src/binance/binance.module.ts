import { Module } from '@nestjs/common';

import { BinanceController } from './binance.controller';
import { BinanceRestAdapter } from './infrastructure/rest/BinanceRestAdapter';
import { GetPriceUseCase } from './application/use-cases/GetPriceUseCase';
import { GetOrderBookUseCase } from './application/use-cases/GetOrderBookUseCase';
import { GetTradesUseCase } from './application/use-cases/GetTradesUseCase';

@Module({
  imports: [],
  controllers: [BinanceController],
  providers: [
    {
      provide: 'IMarketDataPort',
      useClass: BinanceRestAdapter,
    },
    GetPriceUseCase,
    GetOrderBookUseCase,
    GetTradesUseCase,
  ],
})
export class BinanceModule {}
