import { Injectable } from '@nestjs/common';
import type { BinanceRepository } from 'src/binance/domain/repositories/binance.repository';

@Injectable()
export class GetMarketPriceUseCase {
  constructor(private readonly repo: BinanceRepository) {}

  async execute(symbol: string) {
    return this.repo.getMarketPrice(symbol.toUpperCase());
  }
}
