import { Paper } from "@mui/material";
import Form, { ExtraFormActionType } from "../../components/Form/Form";
import { useApi } from "../../config/apiClient";
import { useNavigate } from "react-router-dom";
import { useResidentsContext } from "../../contexts/ResidentsContext";
import { formSchema, ProgramFormInput, validateForm } from "./utils";

export const CreateProgram = () => {
  const navigate = useNavigate();
  const { refetch } = useResidentsContext();
  const { call } = useApi();

  const extraFormActions: ExtraFormActionType[] = [
    {
      label: "Close",
      onClick: () => {
        navigate("/programs", { replace: true });
      },
      variant: "outlined",
    },
  ];

  const onSubmit = async (values: ProgramFormInput) => {
    const { data } = await call({
      method: "post",
      url: "/programs",
      data: ProgramFormInput.toSubmitForm(values),
    });
    await refetch();
    navigate(`/programs/${data.id}`);
  };

  return (
    <Paper
      sx={{
        flex: 1,
        height: "100%",
        backgroundColor: "#f3f3f3",
        overflow: "auto",
        boxSizing: "content-box",
      }}
    >
      <Form<ProgramFormInput>
        initialValues={ProgramFormInput.empty()}
        formSchema={formSchema}
        validate={validateForm}
        onSubmit={onSubmit}
        extraActions={extraFormActions}
      />
    </Paper>
  );
};
