import * as dotenv from 'dotenv';
import * as fs from 'fs';

export class ConfigService {
  private readonly envConfig: Record<string, string>;
  constructor(filePath: string) {
    console.log("first: ", this.envConfig);
    this.envConfig = dotenv.parse(fs.readFileSync(filePath)
    )
    console.log("second: ", this.envConfig);
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}