import Clinic from "../../components/Forms/Clinic";
import HealthSecretary from "../../components/Forms/HealthSecretary";
import Clinics from "../../pages/Superadmin/Clinics";
import Dashboard from "../../pages/Superadmin/Dashboard";
import HealthSecretaries from "../../pages/Superadmin/HealthSecretaries";
import UpdatePassword from "../../pages/UpdatePassword";

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
    element: Clinic,
    isPrivate: true,
  },
  {
    path: `/${identify}/clinics/edit/:id`,
    element: Clinic,
    isPrivate: true,
  },
  {
    path: `/${identify}/health-secretaries`,
    element: HealthSecretaries,
    isPrivate: true,
  },
  {
    path: `/${identify}/health-secretaries/create`,
    element: HealthSecretary,
    isPrivate: true,
  },
  {
    path: `/${identify}/health-secretaries/edit/:id`,
    element: HealthSecretary,
    isPrivate: true,
  },
  {
    path: `/${identify}/update-password/:userId`,
    element: UpdatePassword,
    isPrivate: true,
  },
];
