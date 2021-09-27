import {
    IsNotEmpty,
    IsOptional,
    MaxLength,
    MinLength,
} from 'class-validator';

export class CreateProductDto {
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @IsOptional()
    @MaxLength(150)
    description?: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @MinLength(5)
    sku: string;

    published?: boolean = false;
}