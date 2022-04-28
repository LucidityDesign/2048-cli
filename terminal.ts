import { stdin } from 'process';
import chalk from 'chalk';
import Game from './';
import { getColor } from './colors';

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

type ChalkColor = [red: number, green: number, blue: number];

function logGame() {
  const printArr = Game.field.map((row) => {
    // TODO fix number padding
    return row.map((cell) => {
      const colors = getColor(cell);
      return chalk.hex(colors.color).bgHex(colors.background).bold(`   ${cell}`.slice(-4))
    });
  });

  process.stdout.write('\x1b[H\x1b[2J')
  process.stdout.write(`${Game.score} \n`);
  process.stdout.write(printArr.join('\n'));
}

logGame();

stdin.on('data', (key: string) => {
  if (key == '\u001B\u005B\u0041') {
    Game.onSwipeTop();
    logGame();
  }
  if (key == '\u001B\u005B\u0043') {
    Game.onSwipeRight();
    logGame();
  }
  if (key == '\u001B\u005B\u0042') {
    Game.onSwipeBottom();
    logGame();
  }
  if (key == '\u001B\u005B\u0044') {
    Game.onSwipeLeft();
    logGame();
  }

  if (key == '\u0003') { process.exit(); }    // ctrl-c
});
