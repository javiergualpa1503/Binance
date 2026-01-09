import { Module } from '@nestjs/common';
import { BinanceModule } from './binance/binance.module';
import { TelegramModule } from './telegram/telegram.module';
import { DeepSeekModule } from './deepseek/deepseek.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BinanceModule,
    TelegramModule,
    DeepSeekModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
})
export class AppModule {}
