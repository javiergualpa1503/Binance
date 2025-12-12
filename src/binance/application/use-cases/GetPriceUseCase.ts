import { Inject, Injectable } from '@nestjs/common';
import type { IMarketDataPort } from '../../domain/ports/IMarketDataPort';

@Injectable()
export class GetPriceUseCase {
  constructor(
    @Inject('IMarketDataPort')
    private readonly marketData: IMarketDataPort,
  ) {}

  async execute(symbol: string) {
    return this.marketData.getPrice(symbol);
  }
}
