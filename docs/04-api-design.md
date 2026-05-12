# API Design (v1)

## Conventions
- Base path: `/api/v1`
- Auth: Bearer JWT
- Pagination: `page`, `pageSize`
- Filtering: query params, whitelisted
- Sorting: `sortBy`, `sortOrder`

## Core endpoints
- `POST /auth/login/password`
- `POST /auth/login/otp/request`
- `POST /auth/login/otp/verify`
- `POST /auth/refresh`
- `POST /auth/logout`

- `GET /tenants/me`
- `GET /users/me`

- `GET /doctors`
- `GET /doctors/:id/slots`
- `POST /appointments`
- `PATCH /appointments/:id/cancel`
- `PATCH /appointments/:id/reschedule`

- `POST /payments/checkout`
- `POST /payments/webhooks/stripe`
- `POST /payments/webhooks/razorpay`

- `GET /emr/patients/:patientId/timeline`
- `POST /emr/records`

- `GET /admin/audit-logs`
