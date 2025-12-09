import { Injectable, OnModuleDestroy } from '@nestjs/common';
import WebSocket, { WebSocket as WS } from 'ws';
import { Subject, Observable } from 'rxjs';
import { IStreamProvider, TradeEvent } from '../domain/ports/IStreamProvider';

@Injectable()
export class BinanceWsService implements IStreamProvider, OnModuleDestroy {
  private sockets: Map<string, WebSocket> = new Map();

  private tradeSubject = new Subject<TradeEvent>();

  getTradeStream(symbol: string): Observable<TradeEvent> {
    if (!this.sockets.has(symbol)) {
      this.connectToSymbol(symbol);
    }
    return this.tradeSubject.asObservable();
  }

  private connectToSymbol(symbol: string) {
    const cleanSymbol = symbol.toLowerCase();
    const wsUrl = `wss://stream.binance.com:9443/ws/${cleanSymbol}@trade`;

    const ws: WS = new WebSocket(wsUrl);

    ws.on('open', () => {
      console.log(`Conectado al stream de Binance: ${cleanSymbol}`);
    });

    ws.on('message', (data: any) => {
      const raw = JSON.parse(data.toString());

      // MAPEO (Mapping) - De sucio a limpio dentro del adaptador
      const event: TradeEvent = {
        symbol: raw.s, // Binance manda 's' como symbol
        price: parseFloat(raw.p), // Binance manda strings
        qty: parseFloat(raw.q),
        time: new Date(raw.T),
      };

      this.tradeSubject.next(event);
    });

    ws.on('error', (err) => console.error('Error WS:', err));

    this.sockets.set(symbol, ws);
  }

  onModuleDestroy() {
    this.sockets.forEach((ws) => ws.close());
  }
}
