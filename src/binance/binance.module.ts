import { Module } from '@nestjs/common';
import { BinanceController } from './binance.controller';
import { BinanceRestAdapter } from './infrastructure/rest/BinanceRestAdapter';
import { MarketDataUseCases } from './application/use-cases/MarketDataUseCase';
import { MarketDataStreamUseCases } from './application/use-cases/MarketDataStreamUseCase';
import { BinanceWsAdapter } from './infrastructure/ws/BinanceWsAdapter';

@Module({
  controllers: [BinanceController],
  providers: [
    {
      provide: 'MarketDataPort',
      useClass: BinanceRestAdapter,
    },
    {
      provide: 'MarketStreamPort',
      useClass: BinanceWsAdapter,
    },
    MarketDataUseCases,
    MarketDataStreamUseCases,
  ],
  exports: [
    'MarketDataPort',
    'MarketStreamPort',
    MarketDataUseCases,
    MarketDataStreamUseCases,
  ],
})
export class BinanceModule {}
