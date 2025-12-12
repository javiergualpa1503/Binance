import axios from 'axios';
import { IMarketDataPort } from '../../domain/ports/IMarketDataPort';
import { BinanceMapper } from '../BinanceMapper';
import { BinanceTicker, BinanceDepth, BinanceTrade } from '../BinanceTypes';
import { MarketPrice } from '../../domain/entities/MarketPrice';
import { OrderBook } from '../../domain/entities/OrderBook';
import { RecentTrade } from '../../domain/entities/RecentTrade';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BinanceRestAdapter implements IMarketDataPort {
  private readonly baseUrl = 'https://api.binance.com/api/v3';

  private async get<T>(endpoint: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${endpoint}`);
    return response.data;
  }

  async getPrice(symbol: string): Promise<MarketPrice> {
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
