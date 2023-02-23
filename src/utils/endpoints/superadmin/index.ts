export const superadminEndpoints = {
  listAllClinics: "/clinic",
  listAllHealthSecretaries: "/health-secretaries",

  createAddress: "/address",
  createClinic: "/clinic",
  createAdministrativeSecretary: "/adm-secretary",
  createClinicAdm: "/clinic-adm",
  createHealthSecretary: "/health-secretaries",

  getClinic: (clinic_id: string) => `/clinic/${clinic_id}`,

  updateClinic: (clinic_id: string) => `/clinic/${clinic_id}`,
  updateAddress: (address_id: string) => `/address/${address_id}`,
  updateClinicAdm: (clinicAdm_id: string) => `/clinic-adm/${clinicAdm_id}`,

  deleteClinic: (clinic_id: string) => `/clinic/${clinic_id}`,

  rankingOfCLinics: () => '/ranking',
  rankingOfCLinicsThisMonth: () => '/ranking/this-month',
  totalOfClinics: () => '/total-of-clinics',
  totalOfTherapists: () => '/total-of-therapists',
  totalOfPatients: () => '/total-of-patients',
  totalOfAttendances: () => '/total-of-attendances',
  totalOfAttendancesThisMonth: () => '/total-of-attendances/this-month'
};
