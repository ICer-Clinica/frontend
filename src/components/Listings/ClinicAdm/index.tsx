import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { removeClinicAdm } from "../../../components/atoms/CardList/request";
import ModalConfirm from "../../../components/atoms/ModalConfirm";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import { humanizeTypes } from "../../../utils/functions/Humanize";

interface IClinicAdmListing {
    entity: 'clinicAdm'
}

export default function ClinicAdmListing({entity}: IClinicAdmListing) {
  const [clinicAdms, setClinicAdms] = useState([]);

  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });
  const queryClient = useQueryClient();

  const fetchClinicAdms = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllClinicAdministrators(getClinicID())
    );
  };

  const { isLoading } = useQuery("adms", fetchClinicAdms, {
    onSuccess(data: any) {
      setClinicAdms(data);
    },
    onError(err) {
      alert(err);
    },
  });

  const { mutate, isLoading: mutateIsLoading } = useMutation(removeClinicAdm, {
    onSuccess: (data: any) => {
      handleClose();
      queryClient.invalidateQueries(["adms"]);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const clickDelete = () => {
    mutate(open.id);
  };

  const rows: any = [];
  clinicAdms &&
    clinicAdms?.forEach((clinic: any) => {
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
        data={clinicAdms}
        isLoading={isLoading}
        textButton="Cadastrar administrador de clínica"
        title="Administrador de clínica"
        link={`/${entity}/clinic-adm/create`}
        type="clinicAdms"
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
