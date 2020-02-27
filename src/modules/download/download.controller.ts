import { Header, Param, Inject, forwardRef, Controller, Post, UseInterceptors, Get, UploadedFile, Body, HttpStatus, Res, } from '@nestjs/common';
import { FileInterceptor} from '@nestjs/platform-express';
import { DownloadService } from './download.service'
import { Response } from 'express';
import * as fs from 'fs';

@Controller('/file')
export class DownloadController {
  constructor(
  	@Inject(forwardRef(() => DownloadService))
  	private readonly downloadService: DownloadService
  ) {}

	@Get('/download/:filename')
	@Header('Content-Disposition', 'attachment;')
	async downloadFile(@Param('filename') filename, @Res() res: Response) {
		let file = await this.downloadService.download(filename);
		return res.sendFile(file.data.file.localpath);
	}
}
