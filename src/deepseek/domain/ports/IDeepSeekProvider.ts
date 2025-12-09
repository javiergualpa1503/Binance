export interface IDeepSeekProvider {
  sendPrompt(prompt: string): Promise<string>;
}
