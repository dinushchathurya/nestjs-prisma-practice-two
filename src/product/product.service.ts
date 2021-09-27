import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {

    constructor(private prisma: PrismaService) { }

    getAllPublishedProducts(){
        return this.prisma.product.findMany({
            where: { published: true }
        })
    }
}
