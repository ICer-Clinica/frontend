import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export const getRanking = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        clinicAdmEndpoints.rankingOfTherapists(getClinicID())
    );
};
export const getRankingThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        clinicAdmEndpoints.rankingOfTherapistsThisMonth(getClinicID())
    );
};
export const getTotalOfTherapists = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        clinicAdmEndpoints.totalOfTherapists(getClinicID())
    );
};
export const getTotalOfPatients = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        clinicAdmEndpoints.totalOfPatients(getClinicID())
    );
};
export const getTotalOfAttendances = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        clinicAdmEndpoints.totalOfAttendances(getClinicID())
    );
};
export const getTotalOfAttendancesThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        clinicAdmEndpoints.totalOfAttendancesThisMonth(getClinicID())
    );
};