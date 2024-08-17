import { Box, CircularProgress, LinearProgress } from "@mui/material";
interface ILoadingProps {
  linearProgress?: boolean;
}
const Loading = ({ linearProgress }: ILoadingProps) => {
  if (linearProgress) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        minHeight: 400,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
