import { Global, Module } from '@nestjs/common';
import {
  shareProviders,
  shareProvidersExports,
} from 'configs/providers.config';

@Global()
@Module({
  providers: [...shareProviders],
  exports: [...shareProvidersExports],
})
export class SharedModule {}
