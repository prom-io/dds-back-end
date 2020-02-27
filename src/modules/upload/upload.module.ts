import { Module, HttpModule } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
	exports: [],
	imports: [
		MulterModule.register({
		    dest: './files',
		}), 
		HttpModule.register({
			baseURL: 'http://localhost:9980',
			headers: {
				'User-Agent': 'Sia-Agent'
			},
			auth: {
				username: '',
				password: '76dbb2e33842d61f78475c034bfb833c'
			}
		})
	],
	controllers: [UploadController],
	providers: [UploadService]
})
export class UploadModule {}