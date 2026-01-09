import { Injectable } from '@nestjs/common';
import WebSocket from 'ws';
import { BinancePriceWs } from '../BinanceTypes';

@Injectable()
export class BinanceWsService {
  private ws?: WebSocket;

  connect(symbol: string) {
    if (this.ws) return; // evita duplicados

    this.ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@trade`,
    );

    this.ws.on('message', (data) => {
      if (!Buffer.isBuffer(data)) return;

      const payload = JSON.parse(data.toString('utf8')) as BinancePriceWs;

      const price = Number(payload.p);

      console.log(`📈 ${symbol}:`, price);
    });
  }

  disconnect() {
    this.ws?.close();
    this.ws = undefined;
  }
}
