import { Inject, Injectable } from '@nestjs/common';
import type { IDeepSeekProvider } from '../domain/ports/IDeepSeekProvider';

@Injectable()
export class AnalyzeMarketUseCase {
  constructor(
    @Inject('IDeepSeekProvider')
    private readonly provider: IDeepSeekProvider,
  ) {}

  async execute(prompt: string): Promise<{ analysis: string }> {
    const result = await this.provider.sendPrompt(prompt);
    return { analysis: result };
  }
}
