export const superadminEndpoints = {
  listAllClinics: "/clinic",
  listAllHealthSecretaries: "/health-secretaries",

  createAddress: "/address",
  createClinic: "/clinic",
  deleteClinic: (clinic_id: string) => `/clinic/${clinic_id}`,
  createClinicAdm: "/clinic-adm",
  createHealthSecretary: "/health-secretaries",
  createAdministrativeSecretary: "/adm-secretary",
};
