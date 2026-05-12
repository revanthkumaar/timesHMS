import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class TenancyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const req = context.switchToHttp().getRequest<{ headers: Record<string, string>; tenantId?: string }>();
    const tenantFromHeader = req.headers['x-tenant-id'];
    req.tenantId = typeof tenantFromHeader === 'string' ? tenantFromHeader : 'public';
    return true;
  }
}
