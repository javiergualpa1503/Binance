import { Injectable } from '@nestjs/common';
import { CreateMarketAnalysisDto } from './dto/create-market-analysis.dto';
import { UpdateMarketAnalysisDto } from './dto/update-market-analysis.dto';

@Injectable()
export class MarketAnalysisService {
  create(createMarketAnalysisDto: CreateMarketAnalysisDto) {
    return 'This action adds a new marketAnalysis';
  }

  findAll() {
    return `This action returns all marketAnalysis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marketAnalysis`;
  }

  update(id: number, updateMarketAnalysisDto: UpdateMarketAnalysisDto) {
    return `This action updates a #${id} marketAnalysis`;
  }

  remove(id: number) {
    return `This action removes a #${id} marketAnalysis`;
  }
}
