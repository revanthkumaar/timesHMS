# Database ERD (Textual)

## Core entities
- Tenant
- User
- Role
- Permission
- UserRole
- Hospital
- DoctorProfile
- PatientProfile
- Appointment
- Slot
- WaitingListEntry
- Payment
- Invoice
- Notification
- MedicalRecord
- Prescription
- FileAsset
- AuditLog

## Key relationships
- Tenant 1..N Users/Hospitals/Appointments/Records
- User N..M Role via UserRole
- Role N..M Permission via RolePermission
- DoctorProfile 1..N Slots/Appointments
- PatientProfile 1..N Appointments/MedicalRecords
- Appointment 1..N Payments/Notifications
- Appointment 1..1 Invoice
- MedicalRecord 1..N Prescription/FileAsset
