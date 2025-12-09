import { CryptoPrice, OrderBook, RecentTrade } from '../entities/MarketData';

export interface IMarketDataProvider {
  getPrice(symbol: string): Promise<CryptoPrice>;
  getOrderBook(symbol: string): Promise<OrderBook>;
  getRecentTrades(symbol: string): Promise<RecentTrade[]>;
}
