import { Injectable } from '@nestjs/common';
import { Observable, Subject } from 'rxjs';
import { IMarketStreamPort } from 'src/binance/domain/ports/IMarketStreamPort';
import WebSocket from 'ws';

@Injectable()
export class BinanceWsAdapter implements IMarketStreamPort {
  private ws: WebSocket;
  private events$ = new Subject<any>();

  connect() {
    this.ws = new WebSocket('wss://stream.binance.com/stream');

    this.ws.on('message', (raw) => console.log('Received:', raw));
  }

  subscribe(stream: string) {
    this.ws.send(
      JSON.stringify({
        method: 'SUBSCRIBE',
        params: [stream],
        id: Date.now(),
      }),
    );
  }
  unsubscribe(stream: string) {
    this.ws.send(
      JSON.stringify({
        method: 'UNSUBSCRIBE',
        params: [stream],
        id: Date.now(),
      }),
    );
  }

  getStream$(): Observable<any> {
    return this.events$.asObservable();
  }
}
