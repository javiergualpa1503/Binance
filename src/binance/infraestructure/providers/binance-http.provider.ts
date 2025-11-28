import { Injectable } from '@nestjs/common';

@Injectable()
export class BinanceHttpProvider {
  private baseUrl = 'https://api.binance.com/api/v3';

  async get(path: string, params?: any) {
    const res = await axios.get(`${this.baseUrl}${path}`, { params });
    return res.data;
  }
}
