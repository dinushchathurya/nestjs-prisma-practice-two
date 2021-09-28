import { Auth } from './entities/auth.entity';
import { PrismaService } from './../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    login(email: string, password: string): Promise<Auth>;
    validateUser(userId: string): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
