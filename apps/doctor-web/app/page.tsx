import { AppShell, WorkflowCard } from '@hms/ui';

export default function Page() {
  return (
    <AppShell title="Doctor Portal">
      <WorkflowCard title="Today Schedule" description="See day-wise slots and live queue status." action="View Schedule" />
      <WorkflowCard title="Consultation Notes" description="Capture diagnosis, vitals, and prescription digitally." action="Start Consultation" />
      <WorkflowCard title="Video Consultation" description="Launch secure virtual consultation room." action="Join Call" />
    </AppShell>
  );
}
