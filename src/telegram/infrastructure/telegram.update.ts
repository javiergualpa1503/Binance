import { Update, Start, Help, Command, Ctx, On } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
export class TelegramUpdate {
  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply('👋 Hola! Soy tu bot hecho con NestJS + Telegraf');
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    await ctx.reply('Comandos disponibles:\n/start\n/help\n/price BTCUSDT');
  }

  @Command('price')
  async price(@Ctx() ctx: Context) {
    const message = ctx.message;
    if (!message || !('text' in message)) {
      return ctx.reply('❌ No se pudo leer el mensaje');
    }

    const parts = message.text.split(' ');
    const symbol = parts[1];

    if (!symbol) {
      return ctx.reply('❌ Escribe un símbolo. Ej: /price BTCUSDT');
    }

    await ctx.reply(`📈 Consultando precio de ${symbol}...`);
  }

  @On('text')
  text(@Ctx() ctx: Context) {
    console.log('Mensaje recibido:', ctx.message);
  }
}
