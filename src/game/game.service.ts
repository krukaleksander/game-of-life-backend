import { Injectable } from '@nestjs/common';
import { GameOfLife } from '../utils/GameOfLife';
import { GameDto } from './dto/game.dto';
import { TickResponseDto } from './dto/tickResponse.dto';
import { InitialResponseDto } from './dto/initialResponse.dto';

@Injectable()
export class GameService {
  setInitialBoard(board: GameDto): InitialResponseDto {
    return undefined;
  }

  sendBoardAfterTick(board: any) {
    return undefined;
  }
}
