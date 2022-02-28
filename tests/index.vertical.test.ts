import game from '..';
game.testMode = true;

describe('horizontal moves', () => {
  test('swipe to the top', () => {
    game.field = [
      [0, 2, 0, 0],
      [0, 2, 4, 2],
      [8, 0, 0, 0],
      [0, 2, 2, 4],
    ];
    game.onSwipeTop();
    expect(game.field).toEqual([
      [8, 4, 4, 2],
      [0, 2, 2, 4],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test('swipe to the top', () => {
    game.field = [
      [8, 4, 0, 0],
      [2, 4, 0, 2],
      [8, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    game.onSwipeTop();
    expect(game.field).toEqual([
      [8, 8, 0, 2],
      [2, 0, 0, 0],
      [8, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });

  test('swipe to the bottom', () => {
    game.field = [
      [0, 2, 0, 0],
      [0, 2, 4, 2],
      [8, 0, 0, 0],
      [0, 2, 2, 4],
    ];
    game.onSwipeBottom();
    expect(game.field).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 2, 4, 2],
      [8, 4, 2, 4],
    ]);
  });
});

describe('simple game', () => {
  test('swipe 4x', () => {
    game.field = [
      [0, 2, 0, 0],
      [0, 2, 4, 2],
      [8, 0, 0, 0],
      [0, 2, 2, 4],
    ];
    game.onSwipeBottom();
    expect(game.field).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 2, 4, 2],
      [8, 4, 2, 4],
    ]);
    game.onSwipeLeft();
    expect(game.field).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 4, 2, 0],
      [8, 4, 2, 4],
    ]);
    game.onSwipeBottom();
    expect(game.field).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [2, 0, 0, 0],
      [8, 8, 4, 4],
    ]);
    game.onSwipeRight();
    expect(game.field).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 2],
      [0, 0, 16, 8],
    ]);
  });
});
