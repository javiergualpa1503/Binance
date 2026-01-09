import { Injectable } from '@nestjs/common';
import { TelegramBotPort } from '../domain/ports/telegram-bot.port';

@Injectable()
export class TelegramService implements TelegramBotPort {
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
}
