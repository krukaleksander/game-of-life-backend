export class CellOfLife {
  constructor(private cellValue: number, private neighboursNumber: number) {}
  public tick() {
    if (this.neighboursNumber === 3) return 1;
    if (this.cellValue === 1 && this.neighboursNumber === 2) return 1;
    return 0;
  }
}

export class GameOfLife {
  constructor(private inputBoard: Board) {}
  public tick() {
    this.inputBoard = this.inputBoard.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        const neighboursNumber = this.getNeighboursNumber({
          cellIndex,
          rowIndex,
        });
        const valueAfterTick = new CellOfLife(cell, neighboursNumber).tick();
        return valueAfterTick;
      });
    });
    return this;
  }

  public getState() {
    return this.inputBoard;
  }

  private getNeighboursNumber(cellPosition: CellPosition) {
    return getNeighboursNumber(this.inputBoard, cellPosition);
  }
}

type Cell = number;
type Row = Cell[];
export type Board = Row[];

type CellPosition = {
  rowIndex: number;
  cellIndex: number;
};

const getRowNeighbourValue = (
  row: Row,
  rowIndex: number,
  cellPosition: CellPosition,
) => {
  const isCellBefore = cellPosition.cellIndex - 1 >= 0;
  const isCellAfter = cellPosition.cellIndex + 1 <= row.length - 1;
  const isCellMiddle = rowIndex !== cellPosition.rowIndex;
  const cellBeforeValue = isCellBefore ? row[cellPosition.cellIndex - 1] : 0;
  const cellAfterValue = isCellAfter ? row[cellPosition.cellIndex + 1] : 0;
  const cellMiddleValue = isCellMiddle ? row[cellPosition.cellIndex] : 0;
  return cellBeforeValue + cellAfterValue + cellMiddleValue;
};

export const getNeighboursNumber = (
  inputBoard: Board,
  cellPosition: CellPosition,
): number => {
  let sum = 0;
  const isRowBefore = cellPosition.rowIndex - 1 >= 0;
  const isRowAfter = cellPosition.rowIndex + 1 <= inputBoard.length - 1;

  if (isRowBefore) {
    const rowIndex = cellPosition.rowIndex - 1;
    const row = inputBoard[rowIndex];
    sum += getRowNeighbourValue(row, rowIndex, cellPosition);
  }

  sum += getRowNeighbourValue(
    inputBoard[cellPosition.rowIndex],
    cellPosition.rowIndex,
    cellPosition,
  );

  if (isRowAfter) {
    const rowIndex = cellPosition.rowIndex + 1;
    const row = inputBoard[rowIndex];
    sum += getRowNeighbourValue(row, rowIndex, cellPosition);
  }

  return sum;
};
