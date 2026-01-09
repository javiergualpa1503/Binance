import { Inject, Injectable } from '@nestjs/common';
import type { DeepSeekPort } from '../domain/ports/DeepSeekPort';
import type { MarketDataPort } from 'src/binance/domain/ports/MarketDataPort';
import { DeepSeekResponse } from '../domain/entities/deepseek.entity';

@Injectable()
export class AnalyzeMarketUseCase {
  constructor(
    @Inject('DeepSeekPort')
    private readonly deepSeek: DeepSeekPort,
    @Inject('MarketDataPort')
    private readonly marketData: MarketDataPort,
  ) {}

  async execute(symbol: string): Promise<DeepSeekResponse> {
    const { price } = await this.marketData.getPrice(symbol);
    const orderBook = await this.marketData.getOrderBook(symbol);
    const trades = await this.marketData.getTrades(symbol);

    const prompt = `
Analiza el mercado de ${symbol} usando estos datos:

Precio actual: ${price}

OrderBook:
- Bids: ${orderBook.bids
      .slice(0, 3)
      .map((b) => `${b.price}:${b.qty}`)
      .join(', ')}
- Asks: ${orderBook.asks
      .slice(0, 3)
      .map((a) => `${a.price}:${a.qty}`)
      .join(', ')}

Trades recientes:
${trades
  .slice(0, 5)
  .map((t) => `Precio ${t.price}, Qty ${t.qty}`)
  .join('\n')}

Explica:
- Tendencia
- Presión de compra/venta
- Riesgos
  damelo resumido`;

    const summary = await this.deepSeek.generateAnalysis(prompt);

    return new DeepSeekResponse(summary.content);
  }
}
