import AdministrativeSecretaries from "../../pages/ClinicAdm/AdministrativeSecretaries";
import ClinicAdms from "../../pages/ClinicAdm/ClinicAdms";
import CreateClinicAdm from "../../pages/ClinicAdm/ClinicAdms/CreateClinicAdm";
import Coordinators from "../../pages/ClinicAdm/Coordinators";
import CreateCoordinator from "../../pages/ClinicAdm/Coordinators/CreateCoordinator";
import Dashboard from "../../pages/ClinicAdm/Dashboard";
import Patients from "../../pages/ClinicAdm/Patients";
import CreatePatient from "../../pages/ClinicAdm/Patients/CreatePatient";
import Procedures from "../../pages/ClinicAdm/Procedures";
import CreateProcedure from "../../pages/ClinicAdm/Procedures/CreateProcedure";
import Therapists from "../../pages/ClinicAdm/Therapists";
import CreateTherapist from "../../pages/ClinicAdm/Therapists/CreateTherapist";

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
    element: CreateClinicAdm,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinic-adm/edit/:id`,
    element: CreateClinicAdm,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures`,
    element: Procedures,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures/create`,
    element: CreateProcedure,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures/edit/:id`,
    element: CreateProcedure,
    isPrivate: true,
  },
  {
    path: `/${identify}/patients`,
    element: Patients,
    isPrivate: true,
  },
  {
    path: `/${identify}/patients/create`,
    element: CreatePatient,
    isPrivate: true,
  },
  {
    path: `/${identify}/patients/edit/:id`,
    element: CreatePatient,
    isPrivate: true,
  },
  {
    path: `/${identify}/coordinators`,
    element: Coordinators,
    isPrivate: true,
  },
  {
    path: `/${identify}/coordinators/create`,
    element: CreateCoordinator,
    isPrivate: true,
  },
  {
    path: `/${identify}/coordinators/edit/:id`,
    element: CreateCoordinator,
    isPrivate: true,
  },
  {
    path: `/${identify}/administrative-secretaries`,
    element: AdministrativeSecretaries,
    isPrivate: true,
  },
  {
    path: `/${identify}/therapists`,
    element: Therapists,
    isPrivate: true,
  },
  {
    path: `/${identify}/therapists/create`,
    element: CreateTherapist,
    isPrivate: true,
  },
  {
    path: `/${identify}/therapists/edit/:id`,
    element: CreateTherapist,
    isPrivate: true,
  },
];
