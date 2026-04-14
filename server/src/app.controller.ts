import { Controller, Get ,Post} from '@nestjs/common';
import { AppService } from './app.service';
import { MissingItem } from './database/entities/'
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  getUser(missingItem: MissingItem): MissingItem {
    return new MissingItem()
  }
}
