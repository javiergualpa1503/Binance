import { OrderBook } from '../entities/OrderBook';
import { Price } from '../entities/Price';
import { Trade } from '../entities/Trade';

export interface MarketDataPort {
  getPrice(symbol: string): Promise<Price>;
  getOrderBook(symbol: string): Promise<OrderBook>;
  getTrades(symbol: string): Promise<Trade[]>;
}
