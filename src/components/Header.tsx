import { styled, Box } from "@mui/material";

export const StyledHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "&> :not(:last-child)": {
    marginRight: theme.spacing(1),
  },
}));
