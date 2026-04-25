import { DatabaseModule } from "src/database/db.module";
import { CalcProjService } from "./calcproj.service";
import { Module } from "@nestjs/common";
import { CalcProjController } from "./calcproj.controller";

@Module({
  imports: [DatabaseModule],
  providers: [CalcProjService],
  controllers: [CalcProjController],
})
export class CalcProjModule {}