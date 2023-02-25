import { Box, Grid } from "@mui/material";
import Chart from "react-google-charts";
import { useQuery } from "react-query";
import DashboardCard from "../../../components/atoms/DashboardCard";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";

export default function Dashboard() {
  const getRanking = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.rankingOfTherapists(getClinicID())
    );
  };
  const getRankingThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.rankingOfTherapistsThisMonth(getClinicID())
    );
  };
  const getTotalOfTherapists = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.totalOfTherapists(getClinicID())
    );
  };
  const getTotalOfPatients = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.totalOfPatients(getClinicID())
    );
  };
  const getTotalOfAttendances = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.totalOfAttendances(getClinicID())
    );
  };
  const getTotalOfAttendancesThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.totalOfAttendancesThisMonth(getClinicID())
    );
  };

  const { isLoading: getRankingIsLoading, data: ranking } = useQuery(
    "ranking",
    getRanking
  );
  const { isLoading: getRankingThisMonthIsLoading, data: rankingThisMonth } =
    useQuery("rankingThisMonth", getRankingThisMonth);
  const { isLoading: getTotalTherapists, data: totalOfTherapists } = useQuery(
    "totalOfTherapists",
    getTotalOfTherapists
  );
  const { isLoading: getTotalPatients, data: totalOfPatients } = useQuery(
    "totalOfPatients",
    getTotalOfPatients
  );
  const { isLoading: getTotalAttendances, data: totalOfAttendances } = useQuery(
    "totalOfAttendances",
    getTotalOfAttendances
  );
  const {
    isLoading: getTotalAttendancesThisMonth,
    data: totalOfAttendancesThisMonth,
  } = useQuery("totalOfAttendancesThisMonth", getTotalOfAttendancesThisMonth);

  const rankingOfTherapists = ranking as any[];

  const formattedRankingOfTherapists = [
    [
      "Element",
      "Terapeutas com mais atendimentos realizados",
      { role: "style" },
    ],
  ];

  rankingOfTherapists?.forEach((therapist) => {
    formattedRankingOfTherapists.push([
      therapist?.therapistName,
      therapist?.attendances,
      "#F84B5A",
    ]);
  });

  const rankingOfTherapistsThisMonth = rankingThisMonth as any[];

  const formattedRankingOfTherapistsThisMonth = [
    [
      "Element",
      "Terapeutas com mais atendimentos realizados neste mês",
      { role: "style" },
    ],
  ];

  rankingOfTherapistsThisMonth?.forEach((therapist) => {
    formattedRankingOfTherapistsThisMonth.push([
      therapist?.therapistName,
      therapist?.attendances,
      "#F84B5A",
    ]);
  });

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "1.5rem",
        height: "100%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DashboardCard
            title="Total de terapeutas"
            value={Number(totalOfTherapists)}
          />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            title="Total de pacientes"
            value={Number(totalOfPatients)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6}>
          <DashboardCard
            title="Atendimentos realizados"
            value={Number(totalOfAttendances)}
          />
        </Grid>
        <Grid item xs={6}>
          <DashboardCard
            title="Atendimentos realizados nesse mês"
            value={Number(totalOfAttendancesThisMonth)}
          />
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ height: "100%", maxHeight: "100%" }}>
        <Grid item xs={6}>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={formattedRankingOfTherapists}
          />
        </Grid>
        <Grid item xs={6}>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={formattedRankingOfTherapistsThisMonth}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

