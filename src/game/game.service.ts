import { Injectable } from '@nestjs/common';
import { GameOfLife } from '../utils/GameOfLife';
import { TickResponseDto } from './dto/tickResponse.dto';
import { InitialResponseDto } from './dto/initialResponse.dto';
import { Board } from './utils/Board';

@Injectable()
export class GameService {
  db = new Board();
  setInitialBoard(board): InitialResponseDto {
    return { boardId: this.db.init(board) };
  }

  sendBoardAfterTick(board: any) {
    return undefined;
  }
}
