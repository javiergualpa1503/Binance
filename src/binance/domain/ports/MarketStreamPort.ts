import { Observable } from 'rxjs/internal/Observable';

export interface MarketStreamPort {
  connect(symbol: string): void;
  disconnect(): void;
  getPriceStream(): Observable<number>;
  isConnected(): boolean;
}
