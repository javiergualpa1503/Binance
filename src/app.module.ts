import { Module } from '@nestjs/common';
import { BinanceModule } from './binance/binance.module';
import { TelegramModule } from './telegram/telegram.module';
import { DeepSeekModule } from './deepseek/deepseek.module';
import { MarketAnalysisModule } from './market-analysis/market-analysis.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    BinanceModule,
    TelegramModule,
    DeepSeekModule,
    MarketAnalysisModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
