import { ConfigService, registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt';

export const jwtConfig = registerAs('jwt', () => ({
  secret: process.env.JWT_SECRET,
  expiresIn: process.env.EXP_TIME,
}));

export async function getJwtOptions(configService: ConfigService): Promise<JwtModuleOptions> {
  return {
    secret: configService.get<string>('jwt.secret'),
    signOptions: { expiresIn: configService.get<string>('jwt.expiresIn'), algorithm: 'HS256' }
  }
}
