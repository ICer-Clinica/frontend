import AdministrativeSecretary from "../../components/Forms/AdministrativeSecretaries";
import Patient from "../../components/Forms/Patients";
import Procedure from "../../components/Forms/Procedures";
import Therapist from "../../components/Forms/Therapist";
import AdministrativeSecretaries from "../../pages/Coordinator/AdministrativeSecretaries";
import Dashboard from "../../pages/Coordinator/Dashboard";
import Patients from "../../pages/Coordinator/Patients";
import Procedures from "../../pages/Coordinator/Procedures";
import Therapists from "../../pages/Coordinator/Therapists";

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
    element: Procedure,
    isPrivate: true,
  },
  {
    path: `/${identify}/procedures/edit/:id`,
    element: Procedure,
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
];
