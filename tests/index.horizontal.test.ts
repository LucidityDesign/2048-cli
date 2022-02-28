import game from '..';
game.testMode = true;

describe('horizontal moves', () => {
  describe('one cell', () => {
    test('swipe to the left', () => {
      game.field = [[0, 2, 0, 0]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[2, 0, 0, 0]]);
    });

    test('swipe to the right', () => {
      game.field = [[0, 2, 0, 0]];
      game.onSwipeRight();
      expect(game.field).toEqual([[0, 0, 0, 2]]);
    });
  });

  describe('<= two cells, same value', () => {
    test('[2, 2, 0, 0]', () => {
      game.field = [[2, 2, 0, 0]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[4, 0, 0, 0]]);
    });

    test('[2, 0, 2, 0]', () => {
      game.field = [[2, 0, 2, 0]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[4, 0, 0, 0]]);
    });

    test('[0, 2, 0, 2]', () => {
      game.field = [[0, 2, 0, 2]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[4, 0, 0, 0]]);
    });

    test('[0, 2, 2, 2]', () => {
      game.field = [[0, 2, 2, 2]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[4, 2, 0, 0]]);
    });

    test('[2, 2, 2, 2]', () => {
      game.field = [[2, 2, 2, 2]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[4, 4, 0, 0]]);
    });
  });

  describe('=> two cells, same value', () => {
    test('[2, 2, 0, 0]', () => {
      game.field = [[2, 2, 0, 0]];
      game.onSwipeRight();
      expect(game.field).toEqual([[0, 0, 0, 4]]);
    });

    test('[2, 0, 2, 0]', () => {
      game.field = [[2, 0, 2, 0]];
      game.onSwipeRight();
      expect(game.field).toEqual([[0, 0, 0, 4]]);
    });

    test('[0, 2, 0, 2]', () => {
      game.field = [[0, 2, 0, 2]];
      game.onSwipeRight();
      expect(game.field).toEqual([[0, 0, 0, 4]]);
    });
  });

  describe('<= two cells, various values', () => {
    test('[4, 2, 0, 0]', () => {
      game.field = [[4, 2, 0, 0]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[4, 2, 0, 0]]);
    });

    test('[2, 0, 4, 0]', () => {
      game.field = [[2, 0, 4, 0]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[2, 4, 0, 0]]);
    });

    test('[0, 2, 0, 4]', () => {
      game.field = [[0, 2, 0, 4]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[2, 4, 0, 0]]);
    });

    test('[16, 8, 4, 4]', () => {
      game.field = [[16, 8, 4, 4]];
      let validMove = game.onSwipeLeft();
      expect(game.field).toEqual([[16, 8, 8, 0]]);
      expect(validMove).toBe(true);
      validMove = game.onSwipeLeft();
      expect(game.field).toEqual([[16, 16, 0, 0]]);
      expect(validMove).toBe(true);
      validMove = game.onSwipeLeft();
      expect(game.field).toEqual([[32, 0, 0, 0]]);
      expect(validMove).toBe(true);
      validMove = game.onSwipeLeft();
      expect(game.field).toEqual([[32, 0, 0, 0]]);
      expect(validMove).toBe(false);
    });
  });

  describe('=> two cells, various values', () => {
    test('[4, 2, 0, 0]', () => {
      game.field = [[4, 2, 0, 0]];
      game.onSwipeRight();
      expect(game.field).toEqual([[0, 0, 4, 2]]);
    });

    test('[2, 0, 4, 0]', () => {
      game.field = [[2, 0, 4, 0]];
      game.onSwipeRight();
      expect(game.field).toEqual([[0, 0, 2, 4]]);
    });

    test('[0, 2, 0, 4]', () => {
      game.field = [[0, 2, 0, 4]];
      game.onSwipeRight();
      expect(game.field).toEqual([[0, 0, 2, 4]]);
    });
  });

  describe('<= three cells, various values', () => {
    test('[2, 2, 0, 4]', () => {
      game.field = [[2, 2, 0, 4]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[4, 4, 0, 0]]);
    });
    test('[8, 4, 2, 4]', () => {
      game.field = [[8, 4, 2, 4]];
      game.onSwipeLeft();
      expect(game.field).toEqual([[8, 4, 2, 4]]);
    });
  });
});
