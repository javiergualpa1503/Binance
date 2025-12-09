import { Module } from '@nestjs/common';
import { MarketAnalysisService } from './market-analysis.service';
import { MarketAnalysisController } from './market-analysis.controller';

@Module({
  controllers: [MarketAnalysisController],
  providers: [MarketAnalysisService],
})
export class MarketAnalysisModule {}
