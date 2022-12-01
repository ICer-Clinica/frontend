import { Box, Divider, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { getImageByOption } from "../../../utils/functions/GetImageByRole";
import PaperAtom from "../PaperAtom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ModalConfirm from "../ModalConfirm";
import { useMutation } from "react-query";
import {
  removeAdministrativeSecretaries,
  removeClinic,
  removeClinicAdm,
  removeCoordinators,
  removeHealthSecretary,
  removePatients,
  removeProcedures,
  removeTherapists,
} from "./request";
import { humanizeTypes } from "../../../utils/functions/Humanize";

interface CardListProps {
  name: string;
  id: string;
  type:
    | "clinic"
    | "healthSecretary"
    | "clinicAdms"
    | "procedures"
    | "patients"
    | "coordinators"
    | "admSecretaries"
    | "therapists";
}

export default function CardList({
  name = "Sem nome",
  id,
  type,
}: CardListProps) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  const { mutate } = useMutation(
    type === "clinic"
      ? removeClinic
      : type === "healthSecretary"
      ? removeHealthSecretary
      : type === "clinicAdms"
      ? removeClinicAdm
      : type === "procedures"
      ? removeProcedures
      : type === "patients"
      ? removePatients
      : type === "coordinators"
      ? removeCoordinators
      : type === "admSecretaries"
      ? removeAdministrativeSecretaries
      : removeTherapists,
    {
      onSuccess: (data: any) => {
        window.location.reload();
      },
      onError: (error) => {
        alert(error);
      },
    }
  );

  const clickDelete = () => {
    mutate(id);
  };

  return (
    <>
      <button
        style={{
          position: "relative",
          border: 0,
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
      >
        <PaperAtom size="250px" padding={0}>
          <>
            <Box
              sx={{
                width: "100%",
                height: "250px",
                backgroundImage: `url(${getImageByOption(pathname)})`,
                backgroundSize: "cover",
                opacity: 0.2,
              }}
            />
            <br />
            <Divider />
            <Box
              sx={{
                width: "100%",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" color="#495057">
                <b>{name}</b>
              </Typography>
            </Box>
          </>
        </PaperAtom>
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <button
              style={{
                width: 40,
                height: 40,
                color: "#DD404D",
                backgroundColor: "primary.dark",
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outline: "none",
                border: 0,
                cursor: "pointer",
              }}
            >
              <Icon icon="ic:baseline-edit" width={30} />
            </button>
            <button
              onClick={handleOpen}
              style={{
                width: 40,
                height: 40,
                color: "white",
                backgroundColor: "#DD404D",
                borderRadius: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                outline: "none",
                border: 0,
                cursor: "pointer",
              }}
            >
              <Icon icon="ic:baseline-delete-forever" width={30} />
            </button>
          </Box>
        </Box>
      </button>
      <ModalConfirm
        handleClose={handleClose}
        open={open}
        clickConfirm={clickDelete}
        text="Tem certeza que deseja excluir?"
        title={humanizeTypes(type)}
      />
    </>
  );
}
