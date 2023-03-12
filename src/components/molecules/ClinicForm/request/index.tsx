import { useLocation, useNavigate } from "react-router-dom";
import { IClinic } from "..";
import { ApiService } from "../../../../config/api";
import { superadminEndpoints } from "../../../../utils/endpoints/superadmin";

export const createClinic = async (data: IClinic) => {
  const { street, number, district, name, nameAdm, email, city, state, zip } =
    data;

  const api = new ApiService();

  const address: any = await api.RequestData(
    "POST",
    superadminEndpoints.createAddress,
    { street, number, district, city, state, zip }
  );

  const clinic: any = await api.RequestData(
    "POST",
    superadminEndpoints.createClinic,
    { name, address_id: address.id }
  );

  const adm = await api.RequestData(
    "POST",
    superadminEndpoints.createClinicAdm,
    { name: nameAdm, email, clinic_id: clinic.id }
  );

  return adm;
};

interface IUpdateClinic extends IClinic {
  address_id: string;
  clinic_id: string;
  adm_id: string;
}

export const updateClinic = async (data: IUpdateClinic) => {
  const {
    street,
    number,
    district,
    name,
    nameAdm,
    email,
    address_id,
    adm_id,
    clinic_id,
  } = data;

  const api = new ApiService();

  const address: any = await api.RequestData(
    "PUT",
    superadminEndpoints.updateAddress(address_id),
    { street, number, district }
  );

  const clinic: any = await api.RequestData(
    "PUT",
    superadminEndpoints.updateClinic(clinic_id),
    { name, address_id: address.id }
  );

  const adm = await api.RequestData(
    "PUT",
    superadminEndpoints.updateClinicAdm(adm_id),
    { name: nameAdm, email, clinic_id: clinic.id }
  );

  return adm;
};

export const clinicInfos = async (clinic_id: string) => {
  const api = new ApiService();

  const clinic = await api.RequestData(
    "GET",
    superadminEndpoints.getClinic(clinic_id)
  );

  return clinic;
};

export const onSuccess = () => {
  const { pathname } = useLocation();
  const role = pathname.split("/")[1];

  return role;
};
