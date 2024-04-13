import { existsSync, readFileSync } from 'node:fs';

/**
 * Synchronously Transforms dynamic values
 * @param path - File path
 * @param source - Object to be used to replace dynamic values
 * @returns File content with transformed data
 * @throws Error if file does not exists.
 */
export function transform(
  path: string,
  source: Record<string, string>,
): string {
  if (!existsSync(path)) {
    throw new Error(`File does not exists`);
  }

  const data = readFileSync(path, { encoding: 'utf-8' });

  const keys = Object.keys(source).map((param: string) => {
    return '{' + param + '}';
  });

  const pattern = keys.join('|');

  const filter = new RegExp(pattern, 'gi');

  return data.replace(filter, function replacer(matched: string): string {
    return source[matched.slice(1, -1)];
  });
}
