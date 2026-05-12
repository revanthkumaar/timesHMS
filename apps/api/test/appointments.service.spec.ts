import { ConflictException } from '@nestjs/common';
import { AppointmentsService } from '../src/appointments/appointments.service';

describe('AppointmentsService', () => {
  it('creates appointment', async () => {
    const prisma = { appointment: { create: jest.fn().mockResolvedValue({ id: 'a1' }) } } as any;
    const svc = new AppointmentsService(prisma);
    const res = await svc.create('t1', {
      patientId: 'p1', doctorId: 'd1', startsAt: '2026-01-01T10:00:00.000Z', endsAt: '2026-01-01T10:15:00.000Z',
    });
    expect(res.id).toBe('a1');
  });

  it('throws conflict on duplicate slot', async () => {
    const prisma = { appointment: { create: jest.fn().mockRejectedValue(new Error('dup')) } } as any;
    const svc = new AppointmentsService(prisma);
    await expect(svc.create('t1', {
      patientId: 'p1', doctorId: 'd1', startsAt: '2026-01-01T10:00:00.000Z', endsAt: '2026-01-01T10:15:00.000Z',
    })).rejects.toBeInstanceOf(ConflictException);
  });
});
