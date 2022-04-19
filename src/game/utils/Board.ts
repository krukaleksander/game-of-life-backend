export class Board {
  private id: number;
  private arrayOfBoards: [] | IBoard[];
  constructor() {
    this.id = 0;
    this.arrayOfBoards = [];
  }
  public init(board: RequestBoard) {
    this.arrayOfBoards = [...this.arrayOfBoards, ...[{ id: this.id, board }]];
    this.id += 1;
  }
}

interface IBoard {
  id: number;
  board: RequestBoard;
}

type Cell = number;
type Row = Cell[];
export type RequestBoard = Row[];
