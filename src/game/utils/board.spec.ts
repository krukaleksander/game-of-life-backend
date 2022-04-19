import { Board } from './Board';

describe('Board Class', function () {
  it('should return db of boards', function () {
    const boardDb = new Board();
    expect(boardDb.showDbOfBoards()).toEqual({});
  });
  it('should return db of boards with one element after adding a board', function () {
    const boardDb = new Board();
    const exampleBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(boardDb.init(exampleBoard).showDbOfBoards()).toEqual({
      '0': exampleBoard,
    });
  });
  it('should change state of existing board', function () {
    const boardDb = new Board();
    const exampleBoard = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    const changedBoard = [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ];
    expect(
      boardDb
        .init(exampleBoard)
        .changeStateOfBoard('0', changedBoard)
        .showDbOfBoards(),
    ).toEqual({
      '0': changedBoard,
    });
  });
});
