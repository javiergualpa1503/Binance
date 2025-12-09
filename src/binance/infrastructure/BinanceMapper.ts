import { MarketPrice } from '../domain/entities/market-price.entity';
import { OrderBook } from '../domain/entities/order-book.entity';
import { RecentTrade } from '../domain/entities/trade.entity';
import { BinanceTicker, BinanceDepth, BinanceTrade } from './BinanceTypes';

export class BinanceMapper {
  static toDomainPrice(raw: BinanceTicker): MarketPrice {
    return new MarketPrice(raw.symbol, parseFloat(raw.price));
  }

  static toDomainOrderBook(raw: BinanceDepth): OrderBook {
    return new OrderBook(
      raw.bids.map((b) => ({ price: parseFloat(b[0]), qty: parseFloat(b[1]) })),
      raw.asks.map((a) => ({ price: parseFloat(a[0]), qty: parseFloat(a[1]) })),
    );
  }

  static toDomainTrades(rawTrades: BinanceTrade[]): RecentTrade[] {
    return rawTrades.map(
      (t) =>
        new RecentTrade(
          parseFloat(t.price),
          parseFloat(t.qty),
          new Date(t.time),
        ),
    );
  }
}
