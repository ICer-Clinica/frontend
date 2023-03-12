import Patient from "../../components/Forms/Patients";
import Therapist from "../../components/Forms/Therapist";
import Dashboard from "../../pages/AdmSecretary/Dashboard";
import Patients from "../../pages/AdmSecretary/Patients";
import Therapists from "../../pages/AdmSecretary/Therapists";
import UpdatePassword from "../../pages/UpdatePassword";

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
  {
    path: `/${identify}/update-password/:userId`,
    element: UpdatePassword,
    isPrivate: true,
  },
];
