export interface DeepSeekResponseApi {
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
