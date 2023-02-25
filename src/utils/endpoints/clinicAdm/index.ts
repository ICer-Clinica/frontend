export const clinicAdmEndpoints = {
  listAllClinicAdministrators: (clinic_id: string) =>
    `/clinic-adm/clinic/${clinic_id}`,
  createClinicAdm: "/clinic-adm",
  createTherapist: "/therapist",
  listAllTherapists: (clinic_id: string) => `/therapist/${clinic_id}`,
  listAllProcedures: (clinic_id: string) => `/procedure/${clinic_id}`,
  createProcedure: "/procedure",
  listAllPatients: (clinic_id: string) => `/patients/${clinic_id}`,
  createPatient: "/patients",
  listAllCoordinators: (clinic_id: string) => `/coordinators/${clinic_id}`,
  createCoordinators: "/coordinators",
  listAllAdmSecretaries: (clinic_id: string) => `/adm-secretary/${clinic_id}`,
  createAdmSecretary: "/adm-secretary",

  totalOfTherapists: (clinic_id: string) => `/total-of-therapists/${clinic_id}`,
  totalOfPatients: (clinic_id: string) => `/total-of-patients/${clinic_id}`,
  totalOfAttendances: (clinic_id: string) => `/total-of-attendances/${clinic_id}`,
  totalOfAttendancesThisMonth: (clinic_id: string) => `/total-of-attendances/${clinic_id}/this-month`,
  rankingOfTherapists: (clinic_id: string) => `/ranking/therapists/${clinic_id}`,
  rankingOfTherapistsThisMonth: (clinic_id: string) => `/ranking/therapists/${clinic_id}/this-month`,
};
