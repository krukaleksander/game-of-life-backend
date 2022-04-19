import { Board } from '../../utils/GameOfLife';

export class TickResponseDto {
  status: number;
  result: Board;
}
