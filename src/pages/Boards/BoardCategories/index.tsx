import Box from "@mui/material/Box";

const BoardCategories = () => {
  return (
    <Box
      px={49}
      sx={{
        bgcolor: "primary.light",
        height: "75px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        mt: 15,
      }}
    >
      Board Categories
    </Box>
  );
};

export default BoardCategories;
