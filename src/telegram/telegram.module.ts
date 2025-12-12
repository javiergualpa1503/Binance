import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TelegramUpdate } from './infrastructure/telegram.update';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    TelegrafModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        token: config.get<string>('TELEGRAM_BOT_TOKEN')!,
      }),
    }),
  ],
  providers: [TelegramUpdate],
})
export class TelegramModule {}
