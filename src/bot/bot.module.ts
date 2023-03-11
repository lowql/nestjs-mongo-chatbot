import { Module } from '@nestjs/common';
import { DiscordModule } from '@discord-nestjs/core';
import { BotGateway } from './bot.gateway'
import { BotCommandsController } from './bot-commands.controller';

@Module({
    imports: [DiscordModule.forFeature()],
    controllers: [BotCommandsController]
})
export class BotModule { }
