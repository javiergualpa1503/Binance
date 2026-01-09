import { TelegramBotPort } from 'src/telegram/domain/ports/telegram-bot.port';

export class SendNotificationUseCase {
  constructor(private readonly telegramBot: TelegramBotPort) {}

  execute() {
    this.getStartBotMessage();
  }

  getStartBotMessage() {
    return this.telegramBot.getStartBotMessage();
  }
}
