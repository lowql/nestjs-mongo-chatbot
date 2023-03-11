import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

import { DiscordConfigService } from './config/discord.config.service';
import { DiscordModule } from '@discord-nestjs/core';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demo'),
    UsersModule,
  DiscordModule.forRootAsync({ useClass: DiscordConfigService, }),
  BotModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
