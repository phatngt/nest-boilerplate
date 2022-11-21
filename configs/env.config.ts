import { bool, cleanEnv, num, str } from 'envalid';
import { IEnvConfig } from 'interfaces/config.interface';

export class EnvConfig implements IEnvConfig {
  private env: Readonly<any>;
  constructor() {
    this.env = cleanEnv(process.env, {
      IS_PRODUCT: bool(),
      MONGODB_HOST: str(),
      MONGODB_PORT: num(),
      MONGODB_NAME: str(),
    });
  }

  get isProduct(): boolean {
    return this.env.IS_PRODUCT;
  }

  get mongoDNS(): string {
    return `mongodb://${this.env.MONGODB_HOST}:${this.env.MONGODB_PORT}/${this.env.MONGODB_NAME}`;
  }
}
