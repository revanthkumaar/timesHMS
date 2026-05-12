# System Architecture

## Architectural style
- Domain-oriented modular monolith initially, evolution-ready toward microservices.
- Event-driven integrations for notifications, payments, and scheduling automation.

## Core runtime components
- **Edge**: NGINX / ingress with TLS termination and WAF integration.
- **Web apps**: Next.js apps (admin/patient/doctor).
- **Mobile app**: Expo React Native client.
- **API**: NestJS v1 REST API with Swagger.
- **Data**: PostgreSQL (system of record), Redis (cache, queue, pub/sub).
- **Background workers**: BullMQ processors.
- **Object storage**: S3-compatible bucket for medical attachments.
- **Third-party adapters**: Stripe, Razorpay, Twilio, WhatsApp, email, video.

## Multi-tenant design
- Shared database with strict `tenantId` on tenant-bound entities.
- Composite indexes and uniqueness with `tenantId` for isolation.
- Tenant context resolved from JWT claims + request headers + domain mapping.
- Authorization checks always tenant-scoped.

## Security baseline
- JWT access + rotating refresh tokens.
- RBAC + permission policies.
- Helmet security headers, CORS policy, rate limits.
- Input validation (Zod/DTO validation) and output sanitization.
- Audit logging on all write operations.

## Module dependency graph
1. `config` -> required by all modules
2. `db` -> consumed by auth/rbac/appointments/emr/billing
3. `auth` -> consumed by rbac and all app modules
4. `rbac` -> consumed by route-level guards
5. `scheduling` -> consumed by appointments and notifications
6. `appointments` -> consumed by billing and notifications
7. `payments` -> emits billing events
8. `notifications` -> consumes events from auth/appointments/payments
9. `emr` -> independent domain with references to patient/doctor/appointment
