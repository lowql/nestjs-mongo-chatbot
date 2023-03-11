import {
    Handler,
    IA,
    SubCommand,
} from '@discord-nestjs/core';
import { SlashCommandPipe } from '@discord-nestjs/common';

import { NumberDto } from '../dto/number.dto';

@SubCommand({ name: 'number', description: 'Register by phone number' })
export class NumberSubCommand {
    @Handler()
    onPhoneNumber(@IA(SlashCommandPipe) dto: NumberDto): string {
        return `Success register user: ${dto.phoneNumber}, ${dto.name}, ${dto.age}, ${dto.city}`;
    }
}