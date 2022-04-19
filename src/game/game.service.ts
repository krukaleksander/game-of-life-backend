import { Injectable } from '@nestjs/common';
import { GameOfLife } from '../utils/GameOfLife';
import { TickResponseDto } from './dto/tickResponse.dto';
import { InitialResponseDto } from './dto/initialResponse.dto';
import { Board } from './utils/Board';
import { TickRequestDto } from './dto/tickRequest.dto';
import { GameDto } from './dto/game.dto';

@Injectable()
export class GameService {
  db = new Board();
  setInitialBoard(board: GameDto): InitialResponseDto {
    return { boardId: this.db.init(board.board) };
  }

  sendBoardAfterTick(id: TickRequestDto) {
    const boardFromDb = this.db.findBoard(id.id);
    const boardAfterTick = new GameOfLife(boardFromDb).tick().getState();
    this.db.changeStateOfBoard(id.id, boardAfterTick);
    return {
      status: 200,
      result: boardAfterTick,
    };
  }
}
