import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllPublishedProducts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
}
