import { Controller, Get, Param } from '@nestjs/common';
import { GetMarketSummaryUseCase } from './application/GetMarketSummaryUseCase';
import { MarketSummaryDTO } from './application/GetMarketSummaryUseCase';

@Controller('binance')
export class BinanceController {
  constructor(
    private readonly getMarketSummaryUseCase: GetMarketSummaryUseCase,
  ) {}

  @Get(':pair')
  async getMarketSummary(
    @Param('pair') pair: string,
  ): Promise<MarketSummaryDTO> {
    const cleanPair = pair.trim().toUpperCase();
    const summary = await this.getMarketSummaryUseCase.execute(cleanPair);
    return summary;
  }
}
