import { Controller, Post, UseInterceptors, Get, UploadedFile, Body, HttpStatus, Res, } from '@nestjs/common';
import { PriceService } from './price.service';
import { PriceDto } from './price.dto';
import { Response } from 'express';

@Controller('/price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

	@Post('/info')
	async uploadFile(@Body() priceDto: PriceDto, @Res() res: Response) {
		let amount = await this.priceService.convert(priceDto);
		return res.status(HttpStatus.CREATED).send({"amount": amount});
	}
}
