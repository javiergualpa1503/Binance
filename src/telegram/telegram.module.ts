import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUpdate } from './infrastructure/telegram.update';
import { ConfigService } from '@nestjs/config';
import { TelegramService } from './infrastructure/telegram.service';
import { BinanceModule } from 'src/binance/binance.module';

@Module({
  imports: [
    BinanceModule,
    TelegrafModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        token: config.get<string>('TELEGRAM_BOT_TOKEN')!,
      }),
    }),
  ],
  providers: [TelegramUpdate, TelegramService],
})
export class TelegramModule {}
