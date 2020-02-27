import { Controller, Post, UseInterceptors, Get, UploadedFile, Body, HttpStatus, Res, } from '@nestjs/common';
import { FileInterceptor} from '@nestjs/platform-express';
import { UploadService } from './upload.service'
import { Response } from 'express';

@Controller('/file')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

	@Post('/upload')
	@UseInterceptors(
	  FileInterceptor('file'),
	)
	async uploadFile(@Body('filename') filename, @UploadedFile() file, @Res() res: Response) {
		await this.uploadService.upload(file, filename);
		return res.status(HttpStatus.CREATED).send({"status": "success"});
	}
}
