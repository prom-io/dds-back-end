import { Module, HttpModule } from '@nestjs/common';
import { DownloadController } from './download.controller';
import { DownloadService } from './download.service';

@Module({
	exports: [],
	imports: [ 
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
	controllers: [DownloadController],
	providers: [DownloadService]
})
export class DownloadModule {}