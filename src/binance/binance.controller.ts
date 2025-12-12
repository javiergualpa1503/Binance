import { Controller, Get, Param } from '@nestjs/common';
import {
  GetPriceUseCase,
  GetOrderBookUseCase,
  GetTradesUseCase,
} from './application/use-cases';
@Controller('binance')
export class BinanceController {
  constructor(
    private readonly getPrice: GetPriceUseCase,
    private readonly getOrderBook: GetOrderBookUseCase,
    private readonly getTrades: GetTradesUseCase,
  ) {}

  @Get(':symbol/price')
  getPriceEndpoint(@Param('symbol') symbol: string) {
    return this.getPrice.execute(symbol);
  }

  @Get(':symbol/orderbook')
  getOrderBookEndpoint(@Param('symbol') symbol: string) {
    return this.getOrderBook.execute(symbol);
  }

  @Get(':symbol/trades')
  getTradesEndpoint(@Param('symbol') symbol: string) {
    return this.getTrades.execute(symbol);
  }
}
