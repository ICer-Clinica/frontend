import Dashboard from "../../pages/HealthSecretary/Dashboard";

const identify = "healthSecretary";

export const healthSecretaryRoutes = [
    {
        path: `/${identify}/dashboard`,
        element: Dashboard,
        isPrivate: true,
    },
];
