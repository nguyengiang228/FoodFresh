import { Box } from "@mui/material";

const BoardContent = () => {
  return (
    <Box
      sx={{
        height: "calc(100vh - (32px + 75px + 82px))",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      Board Content
    </Box>
  );
};

export default BoardContent;
