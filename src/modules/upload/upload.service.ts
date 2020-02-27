import { HttpService, BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class UploadService {
	constructor(private readonly httpService: HttpService) {}

	async upload(file: any, filename: string) {
		try {
			let path = `/var/www/dds-backend/${file.path}`;
			let response = await this.httpService.post(`/renter/upload/${filename}`, `source=${path}`).toPromise();
			// fs.unlink(path, (err) => {
			// 	if(err) {
			// 		console.log(err);
			// 		return;
			// 	}
			// });
			return response.data;
		} catch (e) {
			throw new BadRequestException(e.response.data.message)
		}
	}
}