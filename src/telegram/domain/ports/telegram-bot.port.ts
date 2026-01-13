export interface TelegramBotPort {
  getStartBotMessage(): string;
  notifyPrice(chatId: number, message: string): any;
}
