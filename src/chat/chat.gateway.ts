import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { ChatService } from './chat.service';

@WebSocketGateway(80, {
  cors: {
    origin: '*',
    credentials: true,
  },
  allowEIO3: true,
})
export class ChatGateway {
  constructor(private chatService: ChatService) {}

  @SubscribeMessage('chat')
  async handleMessage(
    @ConnectedSocket() socket: Socket,
    @MessageBody() message: string,
  ) {
    console.log(socket);
    socket.broadcast.emit('new_chat', message);
    await this.chatService.createChat(socket.id, message);
    return;
  }
}
