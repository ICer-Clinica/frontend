import { Icon } from "@iconify/react";
import { Box, Button, IconButton, Tooltip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ListTable, { IColumns } from "../../atoms/ListTable";
import PageTitle from "../../atoms/PageTitle";

interface ListingProps {
  isLoading: boolean;
  data: object[];
  title: string;
  textButton: string;
  link: string;
  type:
    | "clinic"
    | "healthSecretary"
    | "clinicAdms"
    | "procedures"
    | "patients"
    | "coordinators"
    | "admSecretaries"
    | "therapists";
  columns: IColumns[];
  rows: object[];
}

export default function Listing({
  isLoading,
  data,
  title,
  textButton,
  link,
  type,
  columns,
  rows,
}: ListingProps) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1.7rem",
        maxHeight: "90vh",
        height: "90vh",
      }}
    >
      <PageTitle title={title} />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Tooltip title={textButton}>
            <IconButton
              onClick={() => navigate(link)}
              sx={(theme) => ({
                backgroundColor: "#F84B5A",
                borderRadius: "20%",
                color: "white",
                width: '2.7rem',
                height:'2.7rem',
                [theme.breakpoints.down('md')]: {
                  width: '2.16rem',
                  height:'2.16rem',
                },
                ":hover": {
                  backgroundColor: "#DD404D",
                },
              })}
            >
              <Icon icon="material-symbols:add" />
            </IconButton>
          </Tooltip>
        </Box>
        <ListTable columns={columns} rows={rows} />
      </Box>
    </Box>
  );
}
