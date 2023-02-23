import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Chart } from "react-google-charts";
import { useQuery } from "react-query";
import DashboardCard from "../../../components/atoms/DashboardCard";
import { ApiService } from "../../../config/api";
import { superadminEndpoints } from "../../../utils/endpoints/superadmin";

export default function Dashboard() {
  const getRanking = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.rankingOfCLinics());
  };
  const getRankingThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      superadminEndpoints.rankingOfCLinicsThisMonth()
    );
  };
  const getTotalOfClinics = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfClinics());
  };
  const getTotalOfTherapists = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfTherapists());
  };
  const getTotalOfPatients = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfPatients());
  };
  const getTotalOfAttendances = async () => {
    const api = new ApiService();
    return api.RequestData("GET", superadminEndpoints.totalOfAttendances());
  };
  const getTotalOfAttendancesThisMonth = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      superadminEndpoints.totalOfAttendancesThisMonth()
    );
  };

  const { isLoading: getRankingIsLoading, data: ranking } = useQuery(
    "ranking",
    getRanking
  );
  const { isLoading: getRankingThisMonthIsLoading, data: rankingThisMonth } =
    useQuery("rankingThisMonth", getRankingThisMonth);
  const { isLoading: getTotalClinics, data: totalOfClinics } = useQuery(
    "totalOfCLinics",
    getTotalOfClinics
  );
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

  const rankingOfClinics = ranking as any[];

  const formattedRankingOfClinics = [
    ["Element", "Atendimentos Realizados", { role: "style" }],
  ];

  rankingOfClinics?.forEach((clinic) => {
    formattedRankingOfClinics.push([
      clinic?.clinicName,
      clinic?.attendances,
      "#F84B5A",
    ]);
  });

  const rankingOfClinicsThisMonth = rankingThisMonth as any[];

  const formattedRankingOfClinicsThisMonth = [
    ["Element", "Atendimentos realizados neste mês", { role: "style" }],
  ];

  rankingOfClinicsThisMonth?.forEach((clinic) => {
    formattedRankingOfClinicsThisMonth.push([
      clinic?.clinicName,
      clinic?.attendances,
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
        <Grid item xs={4}>
          <DashboardCard
            title="Total de clínicas"
            value={Number(totalOfClinics)}
          />
        </Grid>
        <Grid item xs={4}>
          <DashboardCard
            title="Total de terapeutas"
            value={Number(totalOfTherapists)}
          />
        </Grid>
        <Grid item xs={4}>
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
            data={formattedRankingOfClinics}
          />
        </Grid>
        <Grid item xs={6}>
          <Chart
            chartType="ColumnChart"
            width="100%"
            height="100%"
            data={formattedRankingOfClinicsThisMonth}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
