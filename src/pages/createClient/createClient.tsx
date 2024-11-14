import { Typography } from "@mui/material";
import { ClientForm } from "components/client/ClientBForm";
import CustomContainer from "components/customContainer/CustomContainer";
import Loading from "components/Loading";
import { useCreateClient } from "services/hooks/useCreateClient";
import { IClient } from "types/client";

const CreateClient = () => {
  const { mutateAsync: saveProduct, isPending, isError } = useCreateClient();

  const createClientContent = () => {
    if (isError)
      return (
        <Typography>
          Hubo un error al cargar el formulario de creación
        </Typography>
      );

    if (isPending) {
      return <Loading />;
    }

    return (
      <ClientForm
        title="Agregar nuevo cliente"
        onSubmitClient={(client: IClient) => {
          saveProduct(client);
        }}
      />
    );
  };

  return <CustomContainer breadCrumbs>{createClientContent()}</CustomContainer>;
};

export default CreateClient;
