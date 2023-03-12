import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { removeClinic } from "../../../components/atoms/CardList/request";
import ModalConfirm from "../../../components/atoms/ModalConfirm";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { superadminEndpoints } from "../../../utils/endpoints/superadmin";
import { humanizeTypes } from "../../../utils/functions/Humanize";

export default function Clinics() {
  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });
  const api = new ApiService();
  const queryClient = useQueryClient();
  const fetchClinics = async () => {
    return api.RequestData("GET", superadminEndpoints.listAllClinics);
  };

  const [clinics, setClinics] = useState([]);

  const { isLoading } = useQuery("clinics", fetchClinics, {
    onSuccess(data: any) {
      setClinics(data);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const rows: any = [];

  const { mutate, isLoading: mutateIsLoading } = useMutation(removeClinic, {
    onSuccess: (data: any) => {
      handleClose();
      queryClient.invalidateQueries(["clinics"]);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const clickDelete = () => {
    mutate(open.id);
  };

  clinics &&
    clinics?.forEach((clinic: any) => {
      console.log(clinic);

      const data = {
        name: clinic?.name,
        address: `${clinic?.address?.street}, ${clinic?.address?.number}, ${clinic?.address?.city}-${clinic?.address?.state} `,
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
        isLoading={isLoading}
        data={clinics}
        title="Clínicas"
        textButton="Cadastrar Clínica"
        link="/superadmin/clinic/create"
        type="clinic"
        columns={[
          { label: "Criado em", value: "created_at" },
          { label: "Nome", value: "name" },
          { label: "Endereço", value: "address" },
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
