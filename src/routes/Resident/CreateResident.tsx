import { Paper } from "@mui/material";
import Form, { ExtraFormActionType } from "../../components/Form/Form";
import { useApi } from "../../config/apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { useResidentsContext } from "../../contexts/ResidentContext";
import { formSchema, ResidentFormInput, validateForm } from "./utils";

type Props = {};
export const CreateResident = (props: Props) => {
  const navigate = useNavigate();
  const { refetch } = useResidentsContext();
  const { call } = useApi();

  const extraFormActions: ExtraFormActionType[] = [
    {
      label: "Close",
      onClick: () => {
        navigate("/residents", { replace: true });
      },
      variant: "outlined",
    },
  ];

  const onSubmit = async (values: ResidentFormInput) => {
    await call({
      method: "post",
      url: "/residents",
      data: ResidentFormInput.toSubmitForm(values),
    }).then(({ data }) => {
      refetch();
      navigate(`/residents/${data.id}`);
    });
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
      <Form<ResidentFormInput>
        initialValues={ResidentFormInput.empty()}
        formSchema={formSchema}
        validate={validateForm}
        onSubmit={onSubmit}
        extraActions={extraFormActions}
      />
    </Paper>
  );
};
