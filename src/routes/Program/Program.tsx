import { Paper } from "@mui/material";
import Form, { ExtraFormActionType } from "../../components/Form/Form";
import { AttendanceTable } from "./AttendanceTable";
import { useNavigate, useParams } from "react-router-dom";
import { formSchema, ProgramFormInput, validateForm } from "./utils";
import { useProgramsContext } from "../../contexts/ProgramsContext";

export const Program = () => {
  const navigate = useNavigate();
  const { programId } = useParams();
  const { programDic } = useProgramsContext();
  const program = programDic && programId && programDic[programId];

  if (!program) return null;

  const extraFormActions: ExtraFormActionType[] = [
    {
      label: "Close",
      onClick: () => {
        navigate("/programs", { replace: true });
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
        initialValues={ProgramFormInput.fromProgramType(program)}
        formSchema={formSchema}
        validate={validateForm}
        extraActions={extraFormActions}
      />

      <AttendanceTable programId={program.id} data={program.attendance} />
    </Paper>
  );
};
