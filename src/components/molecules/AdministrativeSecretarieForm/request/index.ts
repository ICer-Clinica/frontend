import { ApiService } from "../../../../config/api";
import { superadminEndpoints } from "../../../../utils/endpoints/superadmin";

interface ISecretary {
  name: string;
  email: string;
  password: string;
}

export const createAdministrativeSecretary = async (data: ISecretary) => {
  const api = new ApiService();

  return await api.RequestData(
    "POST",
    superadminEndpoints.createAdministrativeSecretary,
    data
  );
};
