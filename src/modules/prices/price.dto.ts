import { IsNotEmpty } from 'class-validator';

export class PriceDto {
	@IsNotEmpty()
	readonly fileSize: string;
}