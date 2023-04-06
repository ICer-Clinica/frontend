import { Icon } from "@iconify/react";
import { Tooltip } from "@mui/material";
import { useState } from "react";
import { useQueryClient, useQuery, useMutation } from "react-query";
import { ApiService } from "../../../config/api";
import { clinicAdmEndpoints } from "../../../utils/endpoints/clinicAdm";
import { getClinicID } from "../../../utils/functions/GetClinicID";
import { humanizeTypes } from "../../../utils/functions/Humanize";
import { removeAdministrativeSecretaries } from "../../atoms/CardList/request";
import ModalConfirm from "../../atoms/ModalConfirm";
import Listing from "../../molecules/Listing";

interface IAdministrativeSecretariesListing {
    entity: 'clinicAdm' | 'coordinator'
}

export default function AdministrativeSecretariesListing({entity}: IAdministrativeSecretariesListing) {
    const queryClient = useQueryClient();
  const [admSecretaries, setAdmSecretaries] = useState([]);

  const [open, setOpen] = useState({
    opened: false,
    id: "",
  });
  const handleOpen = (id: string) => setOpen({ opened: true, id });
  const handleClose = () => setOpen({ opened: false, id: "" });

  const fetchAdmSecretaries = async () => {
    const api = new ApiService();
    return api.RequestData(
      "GET",
      clinicAdmEndpoints.listAllAdmSecretaries(getClinicID())
    );
  };

  const { isLoading } = useQuery("adm-secretaries", fetchAdmSecretaries, {
    onSuccess(data: any) {
      setAdmSecretaries(data)
    },
    onError(err) {
      console.log(err);
    },
  });

  const { mutate, isLoading: mutateIsLoading } = useMutation(
    removeAdministrativeSecretaries,
    {
      onSuccess: (data: any) => {
        setOpen({...open, opened: false})
        queryClient.invalidateQueries(['adm-secretaries'])
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
  admSecretaries &&
    admSecretaries?.forEach((clinic: any) => {
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
        textButton="Cadastrar Secretário Adm."
        title="Secretários"
        data={admSecretaries}
        type="admSecretaries"
        isLoading={isLoading}
        link={`/${entity}/administrative-secretaries/create`}
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