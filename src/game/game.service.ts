import { Injectable } from '@nestjs/common';
import { GameOfLife } from '../utils/GameOfLife';
import { GameDto } from './dto/game.dto';
import { GameResponseDto } from './dto/gameResponse.dto';

@Injectable()
export class GameService {
  getResult(board: GameDto): GameResponseDto {
    return {
      status: 200,
      result: new GameOfLife(board.board).tick().getState(),
    };
  }
}
