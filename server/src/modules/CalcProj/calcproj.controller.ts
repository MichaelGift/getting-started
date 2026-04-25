import { Body, Controller, Get, Logger, Post, Req } from "@nestjs/common";
import { CalcProjService } from "./calcproj.service";
import { CalculationDTO } from "src/database/entities/calculation.entity";

@Controller('Calculation')
export class CalcProjController {
  constructor(private readonly calService: CalcProjService) {}

  @Post()
  createCalculation(@Body() data: CalculationDTO) {
    return this.calService.createCalculation(data);
  }

  @Get()
  getAll() {
    return this.calService.findAll();
  }
  
   
}