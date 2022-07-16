import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway({
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
  transports: ['websocket'],
  allowEIO3: true,
})
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('chat')
  async handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: string,
  ) {
    socket.broadcast.emit('new_chat', message);
    await this.chatService.createChat(socket.id, message);
    return;
  }
}
