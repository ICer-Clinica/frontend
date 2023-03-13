import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import {
  removePatients,
  removeProcedures,
} from "../../../components/atoms/CardList/request";
import ModalConfirm from "../../../components/atoms/ModalConfirm";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import { humanizeTypes } from "../../../utils/functions/Humanize";
import {
  humanizeCellphone,
  humanizeCPF,
  humanizeSusCard,
} from "../../../utils/functions/humanizers";
export default function Patients() {
  const [patients, setPatients] = useState([]);
  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });

  const fetchPatients = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllPatients(getClinicID())
    );
  };

  const { isLoading } = useQuery("patients", fetchPatients, {
    onSuccess(data: any) {
      setPatients(data);
    },
    onError(err) {
      alert(err);
    },
  });

  const { mutate, isLoading: mutateIsLoading } = useMutation(removePatients, {
    onSuccess: (data: any) => {
      window.location.reload();
    },
    onError: (error) => {
      alert(error);
    },
  });

  const clickDelete = () => {
    mutate(open.id);
  };

  const rows: any = [];
  patients &&
    patients?.forEach((clinic: any) => {
      const data = {
        name: clinic?.name,
        susCard: humanizeSusCard(clinic?.sus_card),
        cpf: humanizeCPF(clinic?.cpf),
        phone: humanizeCellphone(clinic?.phone),
        birthDate: new Date(clinic?.birth_date)?.toLocaleDateString(),
        created_at: new Date(clinic?.created_at)?.toLocaleDateString("pt-br"),
        actions: (
          <Tooltip title="Remover">
            <button
              onClick={() => handleOpen(clinic?.id)}
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
          </Tooltip>
        ),
      };
      rows.push(data);
    });

  return (
    <>
      <Listing
        textButton="Cadastrar Paciente"
        title="Pacientes"
        data={patients}
        type="patients"
        isLoading={isLoading}
        link="/clinicAdm/patients/create"
        columns={[
          { label: "Nome", value: "name" },
          { label: "Cartão SUS", value: "susCard" },
          { label: "CPF", value: "cpf" },
          { label: "Telefone", value: "phone" },
          { label: "Data nascimento", value: "birthDate" },
          { label: "Criado em", value: "created_at" },
          { label: "Ações", value: "actions" },
        ]}
        rows={rows}
      />
      <ModalConfirm
        handleClose={handleClose}
        open={open.opened}
        clickConfirm={clickDelete}
        text="Tem certeza que deseja excluir?"
        title={humanizeTypes("clinic")}
        isLoading={mutateIsLoading}
      />
    </>
  );
}
