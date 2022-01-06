import fs from 'fs';

import { Database } from '@shared/utils';

export async function saveToDatabase(fileName: string, value: any) {
  const filePath = Database.makeDatabaseFilePath(fileName);
  fs.writeFileSync(filePath, JSON.stringify(value));
}
