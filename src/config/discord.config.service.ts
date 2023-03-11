import { Injectable } from '@nestjs/common';
import {
    DiscordModuleOption,
    DiscordOptionsFactory,
} from '@discord-nestjs/core';
import { GatewayIntentBits } from 'discord.js';

@Injectable()
export class DiscordConfigService implements DiscordOptionsFactory {
    createDiscordOptions(): DiscordModuleOption {
        return {
            token: process.env.DISCORD_SECRET,
            discordClientOptions: {
                intents: [GatewayIntentBits.Guilds],
            },
        };
    }
}