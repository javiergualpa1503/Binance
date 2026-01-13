import { Inject, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs/internal/Observable';
import type { MarketStreamPort } from 'src/binance/domain/ports/MarketStreamPort';

@Injectable()
export class MarketDataStreamUseCases {
  constructor(
    @Inject('MarketStreamPort')
    private readonly marketStream: MarketStreamPort,
  ) {}

  connectToPriceStream(symbol: string): void {
    this.marketStream.connect(symbol);
  }

  getPriceStream(): Observable<number> {
    return this.marketStream.getPriceStream();
  }

  disconnectFromPriceStream(): void {
    this.marketStream.disconnect();
  }

  isConnected(): boolean {
    return this.marketStream.isConnected();
  }
}
