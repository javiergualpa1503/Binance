import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarketAnalysisService } from './market-analysis.service';
import { CreateMarketAnalysisDto } from './dto/create-market-analysis.dto';
import { UpdateMarketAnalysisDto } from './dto/update-market-analysis.dto';

@Controller('market-analysis')
export class MarketAnalysisController {
  constructor(private readonly marketAnalysisService: MarketAnalysisService) {}

  @Post()
  create(@Body() createMarketAnalysisDto: CreateMarketAnalysisDto) {
    return this.marketAnalysisService.create(createMarketAnalysisDto);
  }

  @Get()
  findAll() {
    return this.marketAnalysisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marketAnalysisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarketAnalysisDto: UpdateMarketAnalysisDto) {
    return this.marketAnalysisService.update(+id, updateMarketAnalysisDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marketAnalysisService.remove(+id);
  }
}
