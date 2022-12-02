import Dashboard from "../../pages/AdmSecretary/Dashboard";
import Patients from "../../pages/AdmSecretary/Patients";
import CreatePatient from "../../pages/AdmSecretary/Patients/CreatePatient";
import Therapists from "../../pages/AdmSecretary/Therapists";
import CreateTherapist from "../../pages/AdmSecretary/Therapists/CreateTherapist";

const identify = "admnistrativeSecretary";

export const admSecretaryRoutes = [
  {
    path: `/${identify}/dashboard`,
    element: Dashboard,
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
