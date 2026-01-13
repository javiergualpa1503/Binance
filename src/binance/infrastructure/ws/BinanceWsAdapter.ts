import { Injectable } from '@nestjs/common';
import WebSocket from 'ws';
import { Subject, Observable } from 'rxjs';
import { MarketStreamPort } from 'src/binance/domain/ports/MarketStreamPort';

@Injectable()
export class BinanceWsAdapter implements MarketStreamPort {
  private ws?: WebSocket;
  private connected = false;

  private priceSubject = new Subject<number>();
  price$ = this.priceSubject.asObservable();

  connect(symbol: string) {
    if (this.connected) return;

    this.ws = new WebSocket(`wss://stream.binance.com:9443/ws/${symbol}@trade`);

    this.ws.on('open', () => {
      this.connected = true;
      console.log('🟢 Binance WS conectado');
    });

    this.ws.on('message', (data) => {
      let text: string;

      if (Buffer.isBuffer(data)) {
        text = data.toString('utf-8');
      } else if (Array.isArray(data)) {
        text = Buffer.concat(data).toString('utf-8');
      } else if (data instanceof ArrayBuffer) {
        text = Buffer.from(data).toString('utf-8');
      } else {
        return;
      }

      const parsed = JSON.parse(text) as { p: string };
      this.priceSubject.next(Number(parsed.p));
    });

    this.ws.on('close', () => {
      this.connected = false;
      console.log('🔴 Binance WS cerrado');
    });
  }

  disconnect() {
    if (!this.ws) return;
    this.ws.close();
    this.connected = false;
  }
  getPriceStream(): Observable<number> {
    return this.price$;
  }
  isConnected() {
    return this.connected;
  }
}
