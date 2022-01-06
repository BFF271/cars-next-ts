import path from 'path';

export function makeDatabaseFilePath(fileName: string) {
  return path.join(process.cwd(), 'database', fileName);
}
