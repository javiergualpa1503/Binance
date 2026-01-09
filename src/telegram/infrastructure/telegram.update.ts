import { Update, Start, Help, Command, Ctx, Message } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { TelegramService } from './telegram.service';

@Update()
export class TelegramUpdate {
  constructor(private readonly telegramService: TelegramService) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply(this.telegramService.getStartBotMessage());
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    console.log(ctx.message?.from);
    await ctx.reply(this.telegramService.getHelpMessage());
  }

  @Command('price')
  async price(@Ctx() ctx: Context, @Message('text') text: string) {
    console.log(text);
    const parts = text.split(' ');
    const symbol = parts[1];

    if (!symbol) {
      return ctx.reply('❌ Escribe un símbolo. Ej: /price BTCUSDT');
    }

    await ctx.reply(this.telegramService.getPriceMessage(symbol));
  }
}
