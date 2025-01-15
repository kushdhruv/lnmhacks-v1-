export interface User {
  address: string;
  name?: string;
  role: 'patient' | 'doctor';
  profileImage?: string;
}

export interface MedicalRecord {
  id: string;
  patientAddress: string;
  doctorAddress: string;
  diagnosis: string;
  prescription?: string;
  date: string;
  transactionId: string;
}

export interface AccessLog {
  id: string;
  doctorAddress: string;
  patientAddress: string;
  timestamp: string;
  action: 'granted' | 'revoked';
  transactionId: string;
}