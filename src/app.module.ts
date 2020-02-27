import { Module } from '@nestjs/common';
import { UploadModule } from './modules/upload/upload.module';
import { DownloadModule } from './modules/download/download.module';
import { PriceModule } from './modules/prices/price.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
  	UploadModule,
  	DownloadModule,
  	PriceModule,
  	ConfigModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
