import { Body, Controller, Get, Param } from '@nestjs/common';
import { AnalyzeMarketUseCase } from './application/AnalyzeMarketUseCase';

@Controller('deepseek')
export class DeepSeekController {
  constructor(private readonly analyzeMarket: AnalyzeMarketUseCase) {}

  @Get(':symbol/analyze')
  analyze(@Param('symbol') symbol: string) {
    return this.analyzeMarket.execute(symbol);
  }
}
