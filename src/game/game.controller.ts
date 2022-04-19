import { Body, Controller, Get } from '@nestjs/common';
import { GameService } from './game.service';
import { GameDto } from './dto/game.dto';
import { GameResponseDto } from './dto/gameResponse.dto';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get('/')
  getResult(@Body() board: GameDto): GameResponseDto {
    console.log(board);
    return this.gameService.getResult(board);
  }
}
