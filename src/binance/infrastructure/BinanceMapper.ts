import { Price } from '../domain/entities/Price';
import { OrderBook } from '../domain/entities/OrderBook';
import { Trade } from '../domain/entities/Trade';
import { BinanceTicker, BinanceDepth, BinanceTrade } from './BinanceTypes';

export class BinanceMapper {
  static toDomainPrice(raw: BinanceTicker): Price {
    return new Price(raw.symbol, parseFloat(raw.price));
  }

  static toDomainOrderBook(raw: BinanceDepth): OrderBook {
    return new OrderBook(
      raw.bids.map((b) => ({ price: parseFloat(b[0]), qty: parseFloat(b[1]) })),
      raw.asks.map((a) => ({ price: parseFloat(a[0]), qty: parseFloat(a[1]) })),
    );
  }

  static toDomainTrades(rawTrades: BinanceTrade[]): Trade[] {
    return rawTrades.map(
      (t) =>
        new Trade(parseFloat(t.price), parseFloat(t.qty), new Date(t.time)),
    );
  }
}
