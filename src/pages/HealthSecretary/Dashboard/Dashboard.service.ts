import { ApiService } from "../../../config/api";
import { superadminEndpoints } from "../../../utils/endpoints/superadmin";

export const getRanking = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.rankingOfCLinics());
};
export const getRankingThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        superadminEndpoints.rankingOfCLinicsThisMonth()
    );
};
export const getTotalOfClinics = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfClinics());
};
export const getTotalOfTherapists = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfTherapists());
};
export const getTotalOfPatients = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfPatients());
};
export const getTotalOfAttendances = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfAttendances());
};
export const getTotalOfAttendancesThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
        "GET",
        superadminEndpoints.totalOfAttendancesThisMonth()
    );
};