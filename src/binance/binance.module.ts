import { Module } from '@nestjs/common';
import { BinanceController } from './binance.controller';
import { BinanceRestAdapter } from './infrastructure/rest/BinanceRestAdapter';
import { MarketDataUseCases } from './application/use-cases/MarketDataUseCase';

@Module({
  imports: [],
  controllers: [BinanceController],
  providers: [
    {
      provide: 'MarketDataPort',
      useClass: BinanceRestAdapter,
    },
    MarketDataUseCases,
  ],
})
export class BinanceModule {}
