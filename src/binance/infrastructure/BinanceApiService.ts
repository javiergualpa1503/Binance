import axios from 'axios';
import { IMarketDataProvider } from '../domain/ports/IMarketDataProvider';
import {
  CryptoPrice,
  OrderBook,
  RecentTrade,
} from '../domain/entities/MarketData';
import { BinanceMapper } from './BinanceMapper';
import { BinanceTicker, BinanceDepth, BinanceTrade } from './BinanceTypes';

export class BinanceApiService implements IMarketDataProvider {
  private readonly baseUrl = 'https://api.binance.com/api/v3';

  private async get<T>(endpoint: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${endpoint}`);
    return response.data;
  }

  async getPrice(symbol: string): Promise<CryptoPrice> {
    const raw = await this.get<BinanceTicker>(`/ticker/price?symbol=${symbol}`);
    return BinanceMapper.toDomainPrice(raw);
  }

  async getOrderBook(symbol: string): Promise<OrderBook> {
    const raw = await this.get<BinanceDepth>(`/depth?symbol=${symbol}&limit=5`);
    return BinanceMapper.toDomainOrderBook(raw);
  }

  async getRecentTrades(symbol: string): Promise<RecentTrade[]> {
    const raw = await this.get<BinanceTrade[]>(
      `/trades?symbol=${symbol}&limit=5`,
    );
    return BinanceMapper.toDomainTrades(raw);
  }
}
