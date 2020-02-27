import { HttpService, Inject, forwardRef, BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class DownloadService {
	constructor(
		@Inject(forwardRef(() => HttpService))
		private readonly httpService: HttpService
	) {}

	async download(filename: string) {
		try {
			return await this.httpService.get(`/renter/file/${filename}`).toPromise();
		} catch (e) {
			throw new BadRequestException(e.response.data.message)
		}
	}
}