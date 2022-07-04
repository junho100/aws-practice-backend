import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
  constructor(
    @Inject('BOARD_REPOSITORY') private boardRepository: Repository<Board>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.save(createBoardDto);
  }

  async findAll() {
    return await this.boardRepository.find();
  }
}
