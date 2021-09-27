import { PrismaService } from 'src/prisma/prisma.service';
export declare class ProductService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllPublishedProducts(): import(".prisma/client").PrismaPromise<import(".prisma/client").Product[]>;
}
