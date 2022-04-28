/**
 * loose adaptation of
 * https://github.com/gabrielecirulli/2048/blob/master/style/main.scss#L339
 */

type Color = string;

const SPECIAL_COLORS: [string, boolean][] = [
  ['#eee4da', true], // 2
  ['#eee1c9', true], // 4
  ['#f3b27a', false], // 8
  ['#f69664', false], // 16
  ['#f77c5f', false], // 32
  ['#f75f3b', false], // 64
  ['#edd073' , false], // 128
  ['#edcc62' , false], // 256
  ['#edc950' , false], // 512
  ['#edc53f' , false], // 1024
];

const BASE = 2;

export function getColor(number: number): {
  background: Color,
  color: Color
} {
  let exponent = Math.log(number) / Math.log(BASE);
  let background = '#333';
  let color = '#FFF';

  const specialBackground = SPECIAL_COLORS[exponent - 1]?.[0];
  const brightBg = SPECIAL_COLORS[exponent - 1]?.[1];

  if (brightBg) {
    color = '#000';
  }

  if (specialBackground) {
    background = specialBackground;
  }

  return {
    background,
    color
  }
}
