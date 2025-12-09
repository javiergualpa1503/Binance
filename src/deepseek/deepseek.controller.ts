import { Body, Controller, Post } from '@nestjs/common';
import { AnalyzeMarketUseCase } from './application/AnalyzeMarketUseCase';
import { DeepSeekRequestDto } from './dto/deepseek-request.dto';

@Controller('deepseek')
export class DeepSeekController {
  constructor(private readonly analyzeMarket: AnalyzeMarketUseCase) {}

  @Post('analyze')
  async analyze(@Body() dto: DeepSeekRequestDto) {
    console.log('Received prompt:', dto.prompt);
    return this.analyzeMarket.execute(dto.prompt);
  }
}
