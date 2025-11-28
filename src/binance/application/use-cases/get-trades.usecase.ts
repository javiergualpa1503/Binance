import { Injectable } from '@nestjs/common';
import type { BinanceRepository } from 'src/binance/domain/repositories/binance.repository';

@Injectable()
export class GetTradesUseCase {
  constructor(private readonly repo: BinanceRepository) {}

  async execute(symbol: string, limit = 20) {
    return this.repo.getTrades(symbol.toUpperCase(), limit);
  }
}
