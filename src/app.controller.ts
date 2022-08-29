/* eslint-disable prettier/prettier */
import { AuthService } from './auth/auth.service';
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

//issue the id card jwt token
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {
    //authentication complete
    //next step authorize
    //id card jwt token
    const token = this.authService.generateToken(req.user);
   //return req.user;
   return token;
  }
  @Get('/software-developer')
  @UseGuards(AuthGuard('jwt'))
  getSoftware(): string {
    return "this is privatedata in software developer";
  }
}
