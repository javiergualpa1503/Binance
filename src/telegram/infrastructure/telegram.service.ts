import { Injectable } from '@nestjs/common';
import { TelegramBotPort } from '../domain/ports/telegram-bot.port';
import { Telegraf } from 'telegraf';
import { InjectBot } from 'nestjs-telegraf';

@Injectable()
export class TelegramService implements TelegramBotPort {
  constructor(
    @InjectBot()
    private readonly bot: Telegraf,
  ) {}

  getStartBotMessage(): string {
    return 'Hola Bienvenido al servicio de Telegram + DeepSeek + Telegram';
  }

  sendMessage(message: string): string {
    return `Mensaje enviado: ${message}`;
  }

  getHelpMessage(): string {
    return 'Comandos disponibles:\n/start - Inicia el bot\n/help - Muestra esta ayuda\n/price <símbolo> - Consulta el precio de un símbolo, por ejemplo: /price BTCUSDT';
  }

  getPriceMessage(symbol: string): string {
    return `📈  Consultando precio de ${symbol}`;
  }

  async notifyPrice(chatId: number, symbol: string) {
    await this.bot.telegram.sendMessage(chatId, symbol);

    return `Notificando precio de ${symbol} a ${chatId}`;
  }
}
