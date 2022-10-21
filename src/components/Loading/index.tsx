import { Backdrop, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export const Loading = () => {
  const { loading } = useContext(UserContext);

  return (
    <Backdrop
      className="filterBackdrop"
      sx={{ color: "#ff577f", zIndex: 2 }}
      open={loading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};
