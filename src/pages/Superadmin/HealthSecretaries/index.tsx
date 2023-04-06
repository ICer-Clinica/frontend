import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { removeHealthSecretary } from "../../../components/atoms/CardList/request";
import ModalConfirm from "../../../components/atoms/ModalConfirm";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { superadminEndpoints } from "../../../utils/endpoints/superadmin";
import { humanizeTypes } from "../../../utils/functions/Humanize";

export default function HealthSecretaries() {
  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });
  const api = new ApiService();
  const fetchClinics = async () => {
    return api.RequestData("GET", superadminEndpoints.listAllHealthSecretaries);
  };

  const [secretaries, setSecretaries] = useState([]);

  const { isLoading } = useQuery("clinics", fetchClinics, {
    onSuccess(data: any) {
      setSecretaries(data);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const { mutate, isLoading: mutateIsLoading } = useMutation(
    removeHealthSecretary,
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
    mutate(open.id);
  };

  const rows: any = [];
  secretaries &&
    secretaries?.forEach((clinic: any) => {
      const data = {
        name: clinic?.name,
        email: clinic?.email,
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
        data={secretaries}
        isLoading={isLoading}
        textButton="Cadastrar Secretário de Saúde"
        title="Secretários de Saúde"
        link="/superadmin/health-secretaries/create"
        type="healthSecretary"
        columns={[
          { label: "Nome", value: "name" },
          { label: "E-mail", value: "email" },
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
