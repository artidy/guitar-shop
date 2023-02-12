import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { UserRole } from '@guitar-shop/shared-types';
import { AdminGuard, AuthGuard } from '@guitar-shop/core';

export function Auth(...roles: UserRole[]) {
  return applyDecorators(
    SetMetadata('roles', roles),
    UseGuards(AuthGuard, AdminGuard),
  );
}
