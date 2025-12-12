import { Observable } from 'rxjs';

export interface IMarketStreamPort {
  connect(): void;
  subscribe(stream: string): void;
  unsubscribe(stream: string): void;

  getStream$(): Observable<any>;
}
