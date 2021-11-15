import { Button, CircularProgress } from "@mui/material";
import { useFormState } from "react-final-form";

type Props = {
  buttonText?: string;
};

export const SubmitButton = ({ buttonText = "Save" }: Props) => {
  const { invalid, submitting } = useFormState({
    subscription: {
      submitting: true,
      invalid: true,
    },
  });
  return (
    <Button
      type="submit"
      variant="contained"
      disabled={submitting || invalid}
      startIcon={submitting && <CircularProgress size={32} />}
    >
      {buttonText}
    </Button>
  );
};
