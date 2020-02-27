import { Module, HttpModule } from '@nestjs/common';
import { PriceController } from './price.controller';
import { PriceService } from './price.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
	imports: [],
	controllers: [PriceController],
	providers: [PriceService]
})
export class PriceModule {}