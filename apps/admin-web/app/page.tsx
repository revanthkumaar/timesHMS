import { AppShell, WorkflowCard } from '@hms/ui';

export default function Page() {
  return (
    <AppShell title="Admin Portal">
      <WorkflowCard title="Doctor Management" description="Onboard doctors, configure schedules and blocks." action="Manage Doctors" />
      <WorkflowCard title="Appointment Operations" description="Handle queues, waiting lists, and reschedules." action="Open Operations" />
      <WorkflowCard title="Billing & Refunds" description="Track payments, reconciliations and refunds." action="Open Billing" />
    </AppShell>
  );
}
