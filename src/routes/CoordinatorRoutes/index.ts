import AdministrativeSecretaries from "../../pages/Coordinator/AdministrativeSecretaries";
import CreateAdministrativeSecretaries from "../../pages/Coordinator/AdministrativeSecretaries/CreateAdministrativeSecretaries";
import Dashboard from "../../pages/Coordinator/Dashboard";
import Patients from "../../pages/Coordinator/Patients";
import CreatePatient from "../../pages/Coordinator/Patients/CreatePatient";
import Procedures from "../../pages/Coordinator/Procedures";
import CreateProcedure from "../../pages/Coordinator/Procedures/CreateProcedure";
import Therapists from "../../pages/Coordinator/Therapists";
import CreateTherapist from "../../pages/Coordinator/Therapists/CreateTherapist";

const identify = "coordinator";

export const coordinatorRoutes = [
  {
    path: `/${identify}/dashboard`,
    element: Dashboard,
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
    path: `/${identify}/administrative-secretaries`,
    element: AdministrativeSecretaries,
    isPrivate: true,
  },
  {
    path: `/${identify}/administrative-secretaries/create`,
    element: CreateAdministrativeSecretaries,
    isPrivate: true,
  },
  {
    path: `/${identify}/administrative-secretaries/edit`,
    element: CreateAdministrativeSecretaries,
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
];
