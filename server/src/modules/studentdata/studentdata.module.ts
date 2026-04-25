import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/db.module";
import { StudentDataService } from "./studentdata.service";
import { StudentDataController } from "./studentdata.controller";


@Module({
    imports: [DatabaseModule],
    providers: [StudentDataService],
    controllers: [StudentDataController]
})
export class StudentDataModule {}