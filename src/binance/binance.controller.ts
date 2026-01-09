import { Controller, Get, Param } from '@nestjs/common';
import { MarketDataUseCases } from './application/use-cases/MarketDataUseCase';
@Controller('binance')
export class BinanceController {
  constructor(private readonly marketDataUseCases: MarketDataUseCases) {}

  @Get(':symbol/price')
  getPriceEndpoint(@Param('symbol') symbol: string) {
    return this.marketDataUseCases.getPrice(symbol);
  }

  @Get(':symbol/orderbook')
  getOrderBookEndpoint(@Param('symbol') symbol: string) {
    return this.marketDataUseCases.getOrderBook(symbol);
  }

  @Get(':symbol/trades')
  getTradesEndpoint(@Param('symbol') symbol: string) {
    return this.marketDataUseCases.getTrades(symbol);
  }
}
