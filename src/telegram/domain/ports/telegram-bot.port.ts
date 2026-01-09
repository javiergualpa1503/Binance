export interface TelegramBotPort {
  getStartBotMessage(): string;
  notifyPrice(chatId: number, symbol: string): Promise<string>;
}
