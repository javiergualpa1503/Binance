import { Update, Start, Help, Command, Ctx, Message } from 'nestjs-telegraf';
import { Context } from 'telegraf';
import { TelegramService } from './telegram.service';
import { MarketDataStreamUseCases } from 'src/binance/application/use-cases/MarketDataStreamUseCase';
import { throttleTime } from 'rxjs/internal/operators/throttleTime';

@Update()
export class TelegramUpdate {
  constructor(
    private readonly telegramService: TelegramService,
    private readonly binanceWs: MarketDataStreamUseCases,
  ) {}

  @Start()
  async start(@Ctx() ctx: Context) {
    await ctx.reply(this.telegramService.getStartBotMessage());
  }

  @Help()
  async help(@Ctx() ctx: Context) {
    console.log(ctx.message?.from);
    await ctx.reply(this.telegramService.getHelpMessage());
  }

  @Command('startprice')
  async startPrice(@Ctx() ctx: Context, @Message('text') text: string) {
    console.log(text);
    const parts = text.split(' ');
    const symbol = parts[1];
    this.binanceWs.connectToPriceStream('btcusdt');
    if (!symbol) {
      return ctx.reply('❌ Escribe un símbolo. Ej: /price BTCUSDT');
    }

    await ctx.reply('📡 Escuchando precio de BTC en tiempo real');
  }

  @Command('price')
  async price(ctx: Context) {
    if (!this.binanceWs.isConnected()) {
      return ctx.reply('❌ El WS no está conectado. Usa /startprice');
    }
    this.binanceWs
      .getPriceStream()
      .pipe(throttleTime(5000))
      .subscribe((price) => {
        void ctx.reply(`💰 precio recibido: ${price}`);
      });
  }

  @Command('endprice')
  async endPrice(@Ctx() ctx: Context) {
    this.binanceWs.disconnectFromPriceStream();
    await ctx.reply('🛑 Desconectado del stream de precios');
  }
}
