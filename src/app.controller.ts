import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  handleHealthCheck() {
    return this.appService.checkHealth();
  }

  @Get('welcome')
  @Render('greet')
  handleGetWelcomePage() {
    return { name: 'Mohit Ahirwal' };
  }
}
