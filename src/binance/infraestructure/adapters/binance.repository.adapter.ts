import { Injectable } from '@nestjs/common';
import type { BinanceRepository } from 'src/binance/domain/repositories/binance.repository';
import { BinanceHttpProvider } from '../providers/binance-http.provider';

@Injectable()
export class BinanceRepositoryAdapter implements BinanceRepository {
  constructor(private readonly http: BinanceHttpProvider) {}

  async getMarketPrice(symbol: string) {
    const data = await this.http.get('/ticker/price', { symbol });
    return new MarketPrice(data.symbol, Number(data.price));
  }

  async getOrderBook(symbol: string, limit = 100) {
    const data = await this.http.get('/depth', { symbol, limit });
    return new OrderBook(data.lastUpdateId, data.bids, data.asks);
  }

  async getTrades(symbol: string, limit = 20) {
    const data = await this.http.get('/trades', { symbol, limit });
    return data.map(t => new Trade(
      t.id,
      Number(t.price),
      Number(t.qty),
      t.time,
      t.isBuyerMaker
    ));
  }
}
