import { Module } from '@nestjs/common';
import { DeepSeekController } from './deepseek.controller';
import { DeepSeekApiService } from './infrastructure/deepseek.service';
import { AnalyzeMarketUseCase } from './application/AnalyzeMarketUseCase';

@Module({
  controllers: [DeepSeekController],
  providers: [
    DeepSeekApiService,
    {
      provide: 'IDeepSeekProvider',
      useExisting: DeepSeekApiService,
    },
    AnalyzeMarketUseCase,
  ],
  exports: ['IDeepSeekProvider', AnalyzeMarketUseCase],
})
export class DeepSeekModule {}
