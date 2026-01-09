import { Injectable } from '@nestjs/common';
import { DeepSeekPort } from '../domain/ports/DeepSeekPort';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { DeepSeekResponse } from '../domain/entities/deepseek.entity';
import { DeepSeekResponseApi } from './interfaces/DeepSeekResponse';

@Injectable()
export class DeepSeekAdapter implements DeepSeekPort {
  private readonly API_URL = 'https://api.deepseek.com/v1/chat/completions';
  private readonly API_KEY: string;

  constructor(private configService: ConfigService) {
    this.API_KEY = this.configService.get<string>('DEEPSEEK_API_KEY')!;
  }

  async generateAnalysis(prompt: string): Promise<DeepSeekResponse> {
    const response = await axios.post<DeepSeekResponseApi>(
      this.API_URL,
      {
        model: 'deepseek-chat',
        messages: [{ role: 'user', content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${this.API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );

    return new DeepSeekResponse(response.data.choices[0].message.content);
  }
}
