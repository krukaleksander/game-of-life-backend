import { Body, Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { Board } from '../utils/GameOfLife';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('/')
  getResult(@Body() board: Board): Board {
    return this.gameService.getResult(board);
  }
}
