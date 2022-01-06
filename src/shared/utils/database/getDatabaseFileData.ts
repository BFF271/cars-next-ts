import fs from 'fs';

import { makeDatabaseFilePath } from '@shared/utils/database';

export async function getDatabaseFileData<T>(fileName: string): Promise<T> {
  const filePath = makeDatabaseFilePath(fileName);
  const fileContent = fs.readFileSync(filePath) as unknown as string;
  const data: T = JSON.parse(fileContent);

  return data;
}
