import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { removeCoordinators } from "../../../components/atoms/CardList/request";
import ModalConfirm from "../../../components/atoms/ModalConfirm";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import { humanizeTypes } from "../../../utils/functions/Humanize";

export default function Coordinators() {
  const queryClient = useQueryClient()
  const [coordinators, setCoordinators] = useState([]);
  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });

  const fetchCoordinators = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllCoordinators(getClinicID())
    );
  };

  const { isLoading } = useQuery("coordinators", fetchCoordinators, {
    onSuccess(data: any) {
      setCoordinators(data);
    },
    onError(err) {
      console.log(err);
    },
  });

  const { mutate, isLoading: mutateIsLoading } = useMutation(
    removeCoordinators,
    {
      onSuccess: (data: any) => {
        setOpen({...open, opened: false})
        queryClient.invalidateQueries(['coordinators'])
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
  coordinators &&
    coordinators?.forEach((clinic: any) => {
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
        textButton="Cadastrar Coordenador"
        title="Coordenadores"
        data={coordinators}
        type="coordinators"
        isLoading={isLoading}
        link="/clinicAdm/coordinators/create"
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
