import { Injectable } from '@nestjs/common';
import { Board } from '../utils/GameOfLife';
import { GameOfLife } from '../utils/GameOfLife';

@Injectable()
export class GameService {
  getResult(board: Board): Board {
    return new GameOfLife(board).tick().getState();
  }
}
