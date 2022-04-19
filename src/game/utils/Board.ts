type Cell = number;
type Row = Cell[];
export type IBoard = Row[];

export class Board {
  private id: number;
  private boardObject: { key: IBoard } | Record<string, never>;
  constructor() {
    this.id = 0;
    this.boardObject = {};
  }
  public init(board: IBoard) {
    this.boardObject[this.id.toString()] = board;
    this.id += 1;
    return this;
  }
  public showDbOfBoards() {
    return this.boardObject;
  }

  findBoard(id: string) {
    return this.boardObject[id];
  }
}
