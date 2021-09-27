import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductEntity } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAllPublishedProducts(): Promise<ProductEntity[]>;
    getDraftProducts(): Promise<ProductEntity[]>;
    getSingleProduct(id: string): Promise<ProductEntity>;
    createProduct(createProductDto: CreateProductDto): Promise<ProductEntity>;
    updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<ProductEntity>;
    deleteProduct(id: string): Promise<ProductEntity>;
}
