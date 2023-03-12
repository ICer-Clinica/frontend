import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Chart as ChartJS } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";
import DashboardCard from "../../../components/atoms/DashboardCard";
import { chartJSRegister } from "../../../utils/functions/chartJSRegister";
import {
  getRanking,
  getRankingThisMonth,
  getTotalOfAttendances,
  getTotalOfAttendancesThisMonth,
  getTotalOfClinics,
  getTotalOfPatients,
  getTotalOfTherapists,
} from "./Dashboard.service";

export default function Dashboard() {
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

  const rankingOfClinicsThisMonth = rankingThisMonth as any[];

  ChartJS.register({ ...chartJSRegister });

  const rankingOfClinicsData = {
    labels: rankingOfClinics?.map((clinic) => clinic?.clinicName),
    datasets: [
      {
        label: "Atendimentos",
        data: rankingOfClinics?.map((clinic) => clinic?.attendances),
        backgroundColor: "rgba(248, 75, 90, 0.7)",
      },
    ],
  };

  const rankingOfClinicsThisMonthData = {
    labels: rankingOfClinicsThisMonth?.map((clinic) => clinic?.clinicName),
    datasets: [
      {
        label: "Atendimentos",
        data: rankingOfClinicsThisMonth?.map((clinic) => clinic?.attendances),
        backgroundColor: "rgba(248, 75, 90, 0.7)",
      },
    ],
  };

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
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top" as const,
                },
              },
            }}
            data={rankingOfClinicsData}
          />
        </Grid>
        <Grid item xs={6}>
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top" as const,
                },
              },
            }}
            data={rankingOfClinicsThisMonthData}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
