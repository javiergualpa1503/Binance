import { DeepSeekResponse } from '../entities/deepseek.entity';

export interface DeepSeekPort {
  generateAnalysis(prompt: string): Promise<DeepSeekResponse>;
}
