import { Typography } from "@mui/material";
import { ClientForm } from "components/client/ClientBForm";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { useParams } from "react-router-dom";
import { useGetClient } from "services/hooks/useGetClient";
import { useUpdateClient } from "services/hooks/useUpdateClient";

const EditClient = () => {
  const { clientId = "" } = useParams();
  const {
    data: client,
    isError: isErrorClient,
    isFetching
  } = useGetClient(clientId);
  const { mutateAsync: updateClient, isPending, isError } = useUpdateClient(
    clientId
  );

  if (isPending || isFetching) return <Loading />

  if (isError || isErrorClient)
    return <Typography>No existe este Stock</Typography>;

  return (
    <>
      <CustomContainer breadCrumbs>
        <ClientForm
          title="Editar cliente"
          client={client}
          isEdit
          onSubmitClient={(client) => updateClient(client)}
        />
      </CustomContainer>
    </>
  );
};

export default EditClient;
