import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { removeProcedures } from "../../../components/atoms/CardList/request";
import ModalConfirm from "../../../components/atoms/ModalConfirm";
import Listing from "../../../components/molecules/Listing";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import { humanizeTypes } from "../../../utils/functions/Humanize";
import { humanizeProcedureCode } from "../../../utils/functions/humanizers";
import returnArea from "../../../utils/functions/returnArea";

export default function Procedures() {
  const [procedures, setProcedures] = useState([]);
  const queryClient = useQueryClient();

  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });

  const fetchProcedures = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllProcedures(getClinicID())
    );
  };

  const { isLoading } = useQuery("procedures", fetchProcedures, {
    onSuccess(data: any) {
      setProcedures(data);
    },
    onError(err) {
      alert(err);
    },
  });

  const { mutate, isLoading: mutateIsLoading } = useMutation(removeProcedures, {
    onSuccess: (data: any) => {
      handleClose();
      queryClient.invalidateQueries(["procedures"]);
    },
    onError: (error) => {
      alert(error);
    },
  });

  const clickDelete = () => {
    mutate(open.id);
  };

  const rows: any = [];
  procedures &&
    procedures?.forEach((clinic: any) => {
      const data = {
        name: clinic?.name,
        code: humanizeProcedureCode(clinic?.code),
        area: returnArea(clinic?.area),
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
        textButton="Cadastrar Procedimento"
        title="Procedimentos"
        data={procedures}
        type="procedures"
        isLoading={isLoading}
        link="/clinicAdm/procedures/create"
        columns={[
          { label: "Código", value: "code" },
          { label: "Nome", value: "name" },
          { label: "Área", value: "area" },
          { label: "Criado", value: "created_at" },
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
