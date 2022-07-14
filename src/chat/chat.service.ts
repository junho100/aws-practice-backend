import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
  ) {}

  async createChat(socketId: string, message: string) {
    const Chat = this.chatRepository.create({
      socketId,
      content: message,
    });

    await this.chatRepository.save(Chat);
  }
}
