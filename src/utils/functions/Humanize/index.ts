type ITypes =
  | "clinic"
  | "healthSecretary"
  | "clinicAdms"
  | "procedures"
  | "patients"
  | "coordinators"
  | "admSecretaries"
  | "therapists";

export const humanizeTypes = (type: ITypes) => {
  switch (type) {
    case "clinic":
      return "Clínica";
    case "healthSecretary":
      return "Secretário de saúde";
    case "clinicAdms":
      return "Administrador de clínica";
    case "procedures":
      return "Procedimentos";
    case "patients":
      return "Pacientes";
    case "coordinators":
      return "Coordenadores";
    case "admSecretaries":
      return "Secretário administrativo";
    case "therapists":
      return "Terapeutas";
  }
};
