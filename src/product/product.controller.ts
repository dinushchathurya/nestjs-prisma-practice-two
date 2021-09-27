import { Controller, Get, Param, Body, Post, Patch, Delete } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
export class ProductController {

    constructor(private readonly productService:ProductService) {}

    @Get()
    async getAllPublishedProducts(): Promise<ProductEntity[]> {
        return await this.productService.getAllPublishedProducts();
    }

    @Get('drafts')
    async getDraftProducts() :Promise<ProductEntity[]> {
        return await this.productService.getDraftProducts();
    }

    @Get('/:id')
    async getSingleProduct(@Param('id') id: string): Promise<ProductEntity> {
        return await this.productService.getSingleProduct(id);
    }

    @Post() 
    async createProduct(@Body() createProductDto: CreateProductDto): Promise<ProductEntity> {
        return await this.productService.createProduct(createProductDto)
    }

    @Patch('/:id')
    async updateProduct(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<ProductEntity> {
        return await this.productService.updateProduct(id,updateProductDto)
    }

    @Delete('/:id')
    async deleteProduct(@Param('id') id:string): Promise<ProductEntity> {
        return await this.productService.deleteProduct(id);
    }
}
