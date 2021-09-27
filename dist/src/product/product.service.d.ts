import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPublishedProducts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    getSingleProduct(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    getDraftProducts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
    createProduct(createProductDto: CreateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
    deleteProduct(id: string): import(".prisma/client").Prisma.Prisma__ProductClient<import(".prisma/client").Product>;
}
