import { IsString } from 'class-validator';

export class DeepSeekRequestDto {
  @IsString()
  prompt: string;
}
