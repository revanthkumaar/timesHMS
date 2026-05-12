import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(tenantId: string, dto: CreateAppointmentDto) {
    try {
      return await this.prisma.appointment.create({
        data: {
          tenantId,
          patientId: dto.patientId,
          doctorId: dto.doctorId,
          startsAt: new Date(dto.startsAt),
          endsAt: new Date(dto.endsAt),
        },
      });
    } catch {
      throw new ConflictException('Slot is already booked');
    }
  }

  async list(tenantId: string) {
    return this.prisma.appointment.findMany({ where: { tenantId }, orderBy: { startsAt: 'asc' } });
  }
}
