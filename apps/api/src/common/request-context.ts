export type RequestContext = {
  tenantId: string;
  user?: { sub: string; tenantId: string; role: string };
};
