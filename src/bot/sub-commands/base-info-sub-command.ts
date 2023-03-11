import { Handler, SubCommand } from '@discord-nestjs/core';
import {
    CommandInteraction,
    InteractionReplyOptions,
    EmbedBuilder,
} from 'discord.js';

@SubCommand({ name: 'base-info', description: 'Base info' })
export class BaseInfoSubCommand {
    @Handler()
    onBaseInfo(interaction: CommandInteraction): InteractionReplyOptions {
        const { user } = interaction;

        const embed = new EmbedBuilder()
            .setImage(user.avatarURL())
            .addFields(
                { name: 'Regular field title', value: 'Some value here' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Inline field title', value: 'Some value here', inline: true },
                { name: 'Inline field title', value: 'Some value here', inline: true },
            )

        return {
            embeds: [embed],
        };
    }
}