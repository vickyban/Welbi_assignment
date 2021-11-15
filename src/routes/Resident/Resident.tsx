import { Paper } from "@mui/material";
import Form, { ExtraFormActionType } from "../../components/Form/Form";
import { AttendanceTable } from "./AttendanceTable";
import { useNavigate, useParams } from "react-router-dom";
import { useResidentsContext } from "../../contexts/ResidentContext";
import { formSchema, ResidentFormInput, validateForm } from "./utils";

type Props = {};
export const Resident = (props: Props) => {
  const navigate = useNavigate();
  const { residentId } = useParams();
  const { residentDic } = useResidentsContext();
  const resident = residentDic && residentId && residentDic[residentId];

  if (!resident) return null;

  const extraFormActions: ExtraFormActionType[] = [
    {
      label: "Close",
      onClick: () => {
        navigate("/residents", { replace: true });
      },
      variant: "outlined",
    },
  ];
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
      <Form
        initialValues={ResidentFormInput.fromResidentType(resident)}
        formSchema={formSchema}
        validate={validateForm}
        extraActions={extraFormActions}
      />
      <AttendanceTable data={resident.attendance} />
    </Paper>
  );
};
