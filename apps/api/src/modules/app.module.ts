import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { HealthController } from './health.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { AppointmentsModule } from '../appointments/appointments.module';
import { TenancyGuard } from '../tenancy/tenancy.guard';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PrismaModule, AuthModule, AppointmentsModule],
  controllers: [HealthController],
  providers: [{ provide: APP_GUARD, useClass: TenancyGuard }],
})
export class AppModule {}
