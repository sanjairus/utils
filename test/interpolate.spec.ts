import * as fs from 'fs';
import { interpolate } from '../src/interpolate';

describe('interpolate', () => {
  it('should throw error if file is non-existent', () => {
    jest.spyOn(fs, 'existsSync').mockImplementation(() => false);

    expect(() => interpolate('file-path', {})).toThrow('File does not exists');
  });

  it('should replace placeholder values with the source object', () => {
    jest.spyOn(fs, 'existsSync').mockImplementation(() => true);

    jest
      .spyOn(fs, 'readFileSync')
      .mockImplementation(() => 'Hello, my name is {name}, {age} years old!');

    const source = { name: 'John Doe', age: '25' };

    expect(interpolate('file-path', source)).toStrictEqual(
      'Hello, my name is John Doe, 25 years old!',
    );
  });
});
