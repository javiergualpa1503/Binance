import { MarketPrice } from '../entities/market-price.entity';
import { OrderBook } from '../entities/order-book.entity';
import { Trade } from '../entities/trade.entity';

export interface BinanceRepository {
  getMarketPrice(symbol: string): Promise<MarketPrice>;
  getOrderBook(symbol: string, limit?: number): Promise<OrderBook>;
  getTrades(symbol: string, limit?: number): Promise<Trade[]>;
}
