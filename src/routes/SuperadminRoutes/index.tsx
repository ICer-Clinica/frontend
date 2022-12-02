import Clinics from "../../pages/Superadmin/Clinics";
import CreateClinic from "../../pages/Superadmin/Clinics/CreateClinic";
import Dashboard from "../../pages/Superadmin/Dashboard";
import HealthSecretaries from "../../pages/Superadmin/HealthSecretaries";
import CreateHealthSecretarie from "../../pages/Superadmin/HealthSecretaries/CreateHealthSecretarie";

const identify = "superadmin";

export const superadminRoutes = [
  {
    path: `/${identify}/dashboard`,
    element: Dashboard,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinics`,
    element: Clinics,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinic/create`,
    element: CreateClinic,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinics/edit/:id`,
    element: CreateClinic,
    isPrivate: true,
  },
  {
    path: `/${identify}/health-secretaries`,
    element: HealthSecretaries,
    isPrivate: true,
  },
  {
    path: `/${identify}/health-secretaries/create`,
    element: CreateHealthSecretarie,
    isPrivate: true,
  },
  {
    path: `/${identify}/health-secretaries/edit/:id`,
    element: CreateHealthSecretarie,
    isPrivate: true,
  },
];
