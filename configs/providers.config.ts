import { Provider } from '@nestjs/common';
import {
  ENV_CONFIG,
  MONGODB_CONNECTION,
} from 'constants/provider-alias.constant';
import { EnvConfig } from './env.config';
import * as mongoose from 'mongoose';

export const shareProviders: Provider[] = [
  {
    provide: ENV_CONFIG,
    useClass: EnvConfig,
  },
  {
    provide: MONGODB_CONNECTION,
    useFactory: (envConfig: EnvConfig): Promise<typeof mongoose> => {
      return mongoose.connect(envConfig.mongoDNS);
    },
    inject: [ENV_CONFIG],
  },
];

export const shareProvidersExport: string[] = [ENV_CONFIG, MONGODB_CONNECTION];

export const mongoSchemaProviders: Provider[] = [];

export const mongoSchemaProvidersExport: string[] = [];
