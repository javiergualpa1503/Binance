import axios from 'axios';
import { MarketDataPort } from '../../domain/ports/MarketDataPort';
import { BinanceMapper } from '../BinanceMapper';
import { BinanceTicker, BinanceDepth, BinanceTrade } from '../BinanceTypes';
import { Price } from '../../domain/entities/Price';
import { OrderBook } from '../../domain/entities/OrderBook';
import { Trade } from '../../domain/entities/Trade';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BinanceRestAdapter implements MarketDataPort {
  private readonly baseUrl = 'https://api.binance.com/api/v3';

  private async get<T>(endpoint: string): Promise<T> {
    const response = await axios.get<T>(`${this.baseUrl}${endpoint}`);
    return response.data;
  }

  async getPrice(symbol: string): Promise<Price> {
    console.log(`Fetching price for ${symbol}`);
    const raw = await this.get<BinanceTicker>(`/ticker/price?symbol=${symbol}`);
    return BinanceMapper.toDomainPrice(raw);
  }

  async getOrderBook(symbol: string): Promise<OrderBook> {
    const raw = await this.get<BinanceDepth>(`/depth?symbol=${symbol}&limit=5`);
    return BinanceMapper.toDomainOrderBook(raw);
  }

  async getTrades(symbol: string): Promise<Trade[]> {
    const raw = await this.get<BinanceTrade[]>(
      `/trades?symbol=${symbol}&limit=5`,
    );
    return BinanceMapper.toDomainTrades(raw);
  }
}
