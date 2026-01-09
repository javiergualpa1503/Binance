import { Module } from '@nestjs/common';
import { DeepSeekController } from './deepseek.controller';
import { DeepSeekAdapter } from './infrastructure/deepseek.adapter';
import { AnalyzeMarketUseCase } from './application/AnalyzeMarketUseCase';
import { BinanceModule } from 'src/binance/binance.module';

@Module({
  imports: [BinanceModule],
  controllers: [DeepSeekController],
  providers: [
    {
      provide: 'DeepSeekPort',
      useClass: DeepSeekAdapter,
    },
    AnalyzeMarketUseCase,
  ],
})
export class DeepSeekModule {}
