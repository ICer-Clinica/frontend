import AdministrativeSecretary from "../../components/Forms/AdministrativeSecretaries";
import ClinicAdm from "../../components/Forms/ClinicAdm";
import Coordinator from "../../components/Forms/Coordinator";
import Patient from "../../components/Forms/Patients";
import Procedure from "../../components/Forms/Procedures";
import Therapist from "../../components/Forms/Therapist";
import AdministrativeSecretaries from "../../pages/ClinicAdm/AdministrativeSecretaries";
import ClinicAdms from "../../pages/ClinicAdm/ClinicAdms";
import Coordinators from "../../pages/ClinicAdm/Coordinators";
import Dashboard from "../../pages/ClinicAdm/Dashboard";
import Patients from "../../pages/ClinicAdm/Patients";
import Procedures from "../../pages/ClinicAdm/Procedures";
import Therapists from "../../pages/ClinicAdm/Therapists";

const identify = "clinicAdm";

export const clinicAdmRoutes = [
  {
    path: `/${identify}/dashboard`,
    element: Dashboard,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinic-adms`,
    element: ClinicAdms,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinic-adm/create`,
    element: ClinicAdm,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinic-adm/edit/:id`,
    element: ClinicAdm,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures`,
    element: Procedures,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures/create`,
    element: Procedure,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures/edit/:id`,
    element: Procedure,
    isPrivate: true,
  },
  {
    path: `/${identify}/patients`,
    element: Patients,
    isPrivate: true,
  },
  {
    path: `/${identify}/patients/create`,
    element: Patient,
    isPrivate: true,
  },
  {
    path: `/${identify}/patients/edit/:id`,
    element: Patient,
    isPrivate: true,
  },
  {
    path: `/${identify}/coordinators`,
    element: Coordinators,
    isPrivate: true,
  },
  {
    path: `/${identify}/coordinators/create`,
    element: Coordinator,
    isPrivate: true,
  },
  {
    path: `/${identify}/coordinators/edit/:id`,
    element: Coordinator,
    isPrivate: true,
  },
  {
    path: `/${identify}/administrative-secretaries`,
    element: AdministrativeSecretaries,
    isPrivate: true,
  },
  {
    path: `/${identify}/administrative-secretaries/create`,
    element: AdministrativeSecretary,
    isPrivate: true,
  },
  {
    path: `/${identify}/administrative-secretaries/edit`,
    element: AdministrativeSecretary,
    isPrivate: true,
  },
  {
    path: `/${identify}/therapists`,
    element: Therapists,
    isPrivate: true,
  },
  {
    path: `/${identify}/therapists/create`,
    element: Therapist,
    isPrivate: true,
  },
  {
    path: `/${identify}/therapists/edit/:id`,
    element: Therapist,
    isPrivate: true,
  },
];
