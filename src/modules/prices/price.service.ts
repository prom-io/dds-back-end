import { HttpService, BadRequestException, Injectable, UploadedFile } from '@nestjs/common';
import { PriceDto } from './price.dto'
import { ConfigService } from '../../config/config.service';
import Web3 from "web3";

@Injectable()
export class PriceService {
	constructor(private readonly config: ConfigService) {}

	convert(dto: PriceDto) {
		let web3 = new Web3(new Web3.providers.HttpProvider(this.config.get('NETWORK_HOST')));
		let siaStoragePrice = 492;
		let siaStorageAmount = siaStoragePrice * Number(dto.fileSize);
		let ether = siaStorageAmount / 0.000009;
		ether += ether * 0.10;
		return web3.utils.fromWei(String(ether), 'ether');
	}
}