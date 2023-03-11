import {
    Handler,
    IA,
    SubCommand,
} from '@discord-nestjs/core';
import { SlashCommandPipe } from '@discord-nestjs/common';

import { EmailDto } from '../dto/email.dto';

@SubCommand({ name: 'email', description: 'Register by email' })
export class EmailSubCommand {
    @Handler()
    onEmail(@IA(SlashCommandPipe) dto: EmailDto): string {
        return `Success register user: ${dto.email}, ${dto.name}, ${dto.age}, ${dto.city}`;
    }
}