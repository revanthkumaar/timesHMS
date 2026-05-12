import { PrismaClient } from '@prisma/client';
import * as crypto from 'node:crypto';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  const tenant = await prisma.tenant.upsert({
    where: { slug: 'demo-hospital' },
    update: {},
    create: { name: 'Demo Hospital', slug: 'demo-hospital' },
  });

  await prisma.user.upsert({
    where: { email: 'patient@example.com' },
    update: {},
    create: {
      tenantId: tenant.id,
      email: 'patient@example.com',
      passwordHash: crypto.createHash('sha256').update('Password@123').digest('hex'),
      phone: '+10000000000',
    },
  });
}

main().finally(async () => prisma.$disconnect());
