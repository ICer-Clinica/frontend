import { admSecretaryRoutes } from "./AdmSecretaryRoutes";
import { clinicAdmRoutes } from "./ClinicAdmRoutes";
import { coordinatorRoutes } from "./CoordinatorRoutes";
import { publicRoutes } from "./PublicRoutes";
import { superadminRoutes } from "./SuperadminRoutes";

export interface RoutesTypes {
  path: string;
  element: any;
  isPrivate?: boolean;
}

export const routes = [
  ...publicRoutes,
  ...superadminRoutes,
  ...clinicAdmRoutes,
  ...coordinatorRoutes,
  ...admSecretaryRoutes,
];
