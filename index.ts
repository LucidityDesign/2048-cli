type FieldIndex = {
  row: number,
  cell: number,
};

const START_VALUES = [2, 4];
const GAME_SIZE = 4;

class Game {
  public field: number[][] = [];
  public testMode: boolean = false;
  private _score: number = 0;

  public get score() {
    return this._score;
  }

  private set score(newValue: number) {
    this._score = newValue;
  }

  constructor () {
    this.newGame();
  }

  newGame(): void {
    this.score = 0;
    this.field = [...Array(GAME_SIZE)].map(() =>
    [...Array(GAME_SIZE)].map(() => 0));

    this.createCell();
  }

  /**
   * create random value in random empty field
   * @returns
   */
  private createCell(): void {
    if (this.testMode) {
      return;
    }
    const randomValue = START_VALUES[Math.round(Math.random())];
    const index = this.getRandomIndex();

    this.field[index.row][index.cell] = randomValue;
  }

  /**
   * Get index of random empty cell
   * @returns {FieldIndex}
   */
  private getRandomIndex(): FieldIndex {
    debugger;
    const emptyIndeces = this.field
      .flat()
      .map((a, i) => a === 0 ? i : -1)
      .filter(a => a > -1);
    const random = emptyIndeces[Math.floor(Math.random() * emptyIndeces.length)];
    const index = {
      row: Math.floor(random / GAME_SIZE),
      cell: random % GAME_SIZE
    };

    return index;
  }

  testGetRandomIndex(): FieldIndex {
    return this.getRandomIndex();
  }

  /**
   * Move all values to left of field
   * @returns {boolean} True if is was a valid move
   */
  onSwipeLeft(): boolean {
    let validMove = false;

    this.field.forEach((row, i) => {
      let previousIndex = -1;
      row.forEach((cell, j) => {
        if (cell !== 0 && j > 0) {
          let newIndex = this.findFurthestCell(row, j, previousIndex);
          if (typeof newIndex === 'undefined') {
            newIndex = j - 1;
          }
          // move value to the next empty cell
          if (row[newIndex] === 0) {
            row[newIndex] = cell;
            row[j] = 0;

            validMove = true;
          // move value to the next cell, that has same value
          } else if(row[newIndex] === cell && newIndex > previousIndex) {
            previousIndex = newIndex;
            row[newIndex] += cell;
            row[j] = 0;

            this.score += row[newIndex];

            validMove = true;
          }
        }
      });
    });

    if (validMove) {
      this.createCell();
    }
    return validMove;
  }

  /**
   * Move all values to right of field
   */
  onSwipeRight(): void {
    this.field.forEach(row => {
      row.reverse();
    });

    this.onSwipeLeft();

    this.field.forEach(row => {
      row.reverse();
    });
  }

  /**
   * Move all values to top of field
   */
  onSwipeTop(): void {
    this.field = this.rotateArrayCW(this.field);
    this.onSwipeLeft();
    this.field = this.rotateArrayCW(this.field);
  }

  /**
   * Move all values to bottom of field
   */
  onSwipeBottom(): void {
    this.field = this.rotateArrayCW(this.field);
    this.onSwipeRight();
    this.field = this.rotateArrayCW(this.field);
  }

  /**
   * Rotate a 2D array clock wise
   * @see https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
   * @param array
   * @returns
   */
  rotateArrayCW(array: number[][]): number[][] {
    return array[0].map((_, colIndex) => array.map(row => [...row][colIndex]));
  }

  /**
   * Rotate a 2D array counter clock wise
   * @see https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
   * @param array
   * @returns
   */
  rotateArrayCCW(array: number[][]): number[][] {
    // const arr: number[][] = array.map(row =>
    //   [...row].reverse()
    // );
    return array[0].map((_, colIndex) => array.map(row => [...row].reverse()[colIndex]));
  }

  /**
   * Find cell with same number as far to the left as possible
   * @param row
   * @param cellIndex
   * @returns
   */
  findFurthestCell(row: number[], cellIndex: number, previousIndex: number = -1): number | undefined {
    let emptyCellIndex;
    for(let i = cellIndex - 1; i > previousIndex; i--) {
      const cell = row[i];

      if (cell === row[cellIndex]) {
        return i;
      }
      if (cell !== row[cellIndex] && cell !== 0) {
        return emptyCellIndex;
      }
      if (cell === 0) {
        emptyCellIndex = i;
      }
    }
    return emptyCellIndex;
  }
}

export default new Game();
