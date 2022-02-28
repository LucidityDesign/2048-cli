import { stdin } from 'process';
import chalk from 'chalk';
import Game from './';

stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

type ChalkColor = [red: number, green: number, blue: number];

function logGame() {
  const printArr = Game.field.map((row) => {
    // TODO fix number padding
    // TODO set better colors
    return row.map((cell) => {
      return chalk.bgRgb(...([cell, 0, 0] as ChalkColor)).bold(`   ${cell}`.slice(-4))
    });
  });

  console.log(printArr.join('\n'));
  console.log("_______");
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
