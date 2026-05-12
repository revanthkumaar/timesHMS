import React from 'react';

export function AppShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: 24, fontFamily: 'Inter, sans-serif' }}>
      <h1>{title}</h1>
      {children}
    </main>
  );
}

export function WorkflowCard({ title, description, action }: { title: string; description: string; action?: string }) {
  return (
    <section style={{ border: '1px solid #ddd', borderRadius: 12, padding: 16, marginBottom: 12 }}>
      <h3>{title}</h3>
      <p>{description}</p>
      {action ? <button>{action}</button> : null}
    </section>
  );
}
