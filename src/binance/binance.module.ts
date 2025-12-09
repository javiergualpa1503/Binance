import { Module } from '@nestjs/common';

import { BinanceController } from './binance.controller';
import { BinanceApiService } from './infrastructure/BinanceApiService';
import { GetMarketSummaryUseCase } from './application/GetMarketSummaryUseCase';

@Module({
  imports: [],
  controllers: [BinanceController],
  providers: [
    BinanceApiService,

    {
      provide: 'IMarketDataProvider',
      useExisting: BinanceApiService,
    },

    {
      provide: GetMarketSummaryUseCase,
      useFactory: (dataProvider) => new GetMarketSummaryUseCase(dataProvider),
      inject: ['IMarketDataProvider'],
    },
  ],
  exports: [GetMarketSummaryUseCase],
})
export class BinanceModule {}
