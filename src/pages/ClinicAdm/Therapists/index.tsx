import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { removeCoordinators, removeTherapists } from "../../../components/atoms/CardList/request";
import ModalConfirm from "../../../components/atoms/ModalConfirm";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import { humanizeTypes } from "../../../utils/functions/Humanize";
import returnArea from "../../../utils/functions/returnArea";

export default function Therapists() {
  const [therapists, setTherapists] = useState([]);
  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });
  const queryClient = useQueryClient()

  const fetchTherapists = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllTherapists(getClinicID())
    );
  };

  const { isLoading } = useQuery("therapists", fetchTherapists, {
    onSuccess(data: any) {
      setTherapists(data);
    },
    onError(err) {
      alert(err);
    },
  });

  const { mutate, isLoading: mutateIsLoading } = useMutation(
    removeTherapists,
    {
      onSuccess: (data: any) => {
        setOpen({...open, opened: false})
        queryClient.invalidateQueries(['therapists'])
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
  therapists &&
    therapists?.forEach((clinic: any) => {
      const data = {
        name: clinic?.name,
        area: returnArea(clinic?.office),
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
        textButton="Cadastrar Terapeuta"
        title="Terapeutas"
        data={therapists}
        type="therapists"
        isLoading={isLoading}
        link="/clinicAdm/therapists/create"
        columns={[
          { label: "Nome", value: "name" },
          { label: "E-mail", value: "email" },
          { label: "Área", value: "area" },
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
