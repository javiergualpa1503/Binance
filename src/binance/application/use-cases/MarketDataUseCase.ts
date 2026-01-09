import type { MarketDataPort } from '../../domain/ports/MarketDataPort';
import { Price } from '../../domain/entities/Price';
import { OrderBook } from 'src/binance/domain/entities/OrderBook';
import { Trade } from 'src/binance/domain/entities/Trade';
import { Inject } from '@nestjs/common';

export class MarketDataUseCases {
  constructor(
    @Inject('MarketDataPort')
    private readonly marketData: MarketDataPort,
  ) {}

  getPrice(symbol: string): Promise<Price> {
    return this.marketData.getPrice(symbol);
  }

  getOrderBook(symbol: string): Promise<OrderBook> {
    return this.marketData.getOrderBook(symbol);
  }

  getTrades(symbol: string): Promise<Trade[]> {
    return this.marketData.getTrades(symbol);
  }
}
