import { Injectable } from '@nestjs/common';
import type { BinanceRepository } from 'src/binance/domain/repositories/binance.repository';

@Injectable()
export class GetOrderBookUseCase {
  constructor(private readonly repo: BinanceRepository) {}

  async execute(symbol: string, limit = 100) {
    return this.repo.getOrderBook(symbol.toUpperCase(), limit);
  }
}
