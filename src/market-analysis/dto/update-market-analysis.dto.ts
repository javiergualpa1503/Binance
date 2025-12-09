import { PartialType } from '@nestjs/mapped-types';
import { CreateMarketAnalysisDto } from './create-market-analysis.dto';

export class UpdateMarketAnalysisDto extends PartialType(CreateMarketAnalysisDto) {}
