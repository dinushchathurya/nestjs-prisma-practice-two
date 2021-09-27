import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService) { }

    getAllPublishedProducts() {
        return this.prisma.product.findMany({
            where: { 
                published: true 
            }
        });
    }

    getSingleProduct(id: string) {
        return this.prisma.product.findUnique({ 
            where: { 
                id: id 
            },
        });
    }

    getDraftProducts() {
        return this.prisma.product.findMany({ 
            where: { 
                published: false 
            } 
        });
    }

    createProduct(createProductDto: CreateProductDto) {
        return this.prisma.product.create({ 
            data: createProductDto 
        });
    }

    updateProduct(id: string, updateProductDto: UpdateProductDto) {
        return this.prisma.product.update({
            where: { id: id },
            data: updateProductDto,
        });
    }

    deleteProduct(id: string) {
        return this.prisma.product.delete({
            where: {
                id: id
            }
        })
    }

}
