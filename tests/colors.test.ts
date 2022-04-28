import { getColor } from "../colors"

describe('colors for', () => {
  test('2', () => {
    const colors = getColor(2);
    expect(colors).toEqual({ background: '#eee4da', color: '#000'});
  });
  test('8', () => {
    const colors = getColor(8);
    expect(colors).toEqual({ background: '#f3b27a', color: '#FFF'});
  });
  test('32', () => {
    const colors = getColor(32);
    expect(colors).toEqual({ background: '#f77c5f', color: '#FFF'});
  });
  test('128', () => {
    const colors = getColor(128);
    expect(colors).toEqual({ background: '#edd073', color: '#FFF'});
  });
  test('512', () => {
    const colors = getColor(512);
    expect(colors).toEqual({ background: '#edc950', color: '#FFF'});
  });
  test('2048', () => {
    const colors = getColor(2048);
    expect(colors).toEqual({ background: '#333', color: '#FFF'});
  });
  test('4096', () => {
    const colors = getColor(2048);
    expect(colors).toEqual({ background: '#333', color: '#FFF'});
  });
});
