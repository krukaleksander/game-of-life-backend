import { Board } from './Board';

describe('Board Class', function () {
  it('should return db of boards', function () {
    const boardDb = new Board();
    expect(boardDb.showDbOfBoards()).toEqual({});
  });
});
