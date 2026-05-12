import { AppShell, WorkflowCard } from '@hms/ui';

export default function Page() {
  return (
    <AppShell title="Patient Portal">
      <WorkflowCard title="Book Appointment" description="Search doctors, select slots, and confirm booking with payment." action="Start Booking" />
      <WorkflowCard title="Appointment History" description="Review past and upcoming consultations." action="View Appointments" />
      <WorkflowCard title="Medical Records" description="Access prescriptions, reports, and timeline." action="Open Records" />
    </AppShell>
  );
}
