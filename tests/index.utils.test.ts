import game from '..';

describe('utils', () => {
  test('rotate CW', () => {
    game.field = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 0, 4],
      [1, 2, 3, 4],
    ];
    game.field = game.rotateArrayCW(game.field);
    expect(game.field).toEqual([
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 0, 3],
      [4, 4, 4, 4],
    ]);
  });
  test('rotate 360deg CW', () => {
    const field = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 0, 4],
      [1, 2, 3, 4],
    ];
    game.field = [...field];
    game.field = game.rotateArrayCW(game.field);
    game.field = game.rotateArrayCW(game.field);
    game.field = game.rotateArrayCW(game.field);
    game.field = game.rotateArrayCW(game.field);
    expect(game.field).toEqual(field);
  });
  test('rotate 360deg CCW', () => {
    const field = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 0, 4],
      [1, 2, 3, 4],
    ];
    game.field = [...field];
    game.field = game.rotateArrayCCW(game.field);
    game.field = game.rotateArrayCCW(game.field);
    game.field = game.rotateArrayCCW(game.field);
    game.field = game.rotateArrayCCW(game.field);
    expect(game.field).toEqual(field);
  });

  test('rotate CCW', () => {
    game.field = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 0, 4],
      [1, 2, 3, 4],
    ];
    game.field = game.rotateArrayCCW(game.field);
    expect(game.field).toEqual([
      [4, 4, 4, 4],
      [3, 3, 0, 3],
      [2, 2, 2, 2],
      [1, 1, 1, 1],
    ]);
  });

  test('getRandomIndex', () => {
    game.field = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 0, 2, 4],
      [1, 2, 3, 4],
    ];
    const randomIndex = game.testGetRandomIndex()

    expect(randomIndex).toEqual({
      row: 2,
      cell: 1
    });
  });
});
