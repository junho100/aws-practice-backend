import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { boardProviders } from './board.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardController],
  providers: [...boardProviders, BoardService],
})
export class BoardModule {}
