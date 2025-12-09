import { Injectable } from '@nestjs/common';
import { IDeepSeekProvider } from '../domain/ports/IDeepSeekProvider';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

interface DeepSeekResponse {
  id: string;
  choices: Array<{
    message: {
      role: string;
      content: string;
    };
    finish_reason: string;
  }>;
  created: number;
  model: string;
}

@Injectable()
export class DeepSeekApiService implements IDeepSeekProvider {
  private readonly API_URL = 'https://api.deepseek.com/v1/chat/completions';
  private readonly API_KEY: string;

  constructor(private configService: ConfigService) {
    this.API_KEY = this.configService.get<string>('DEEPSEEK_API_KEY')!;
  }

  async sendPrompt(prompt: string): Promise<string> {
    const response = await axios.post<DeepSeekResponse>(
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

    return response.data.choices[0].message.content;
  }
}
