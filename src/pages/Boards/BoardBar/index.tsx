import Box from "@mui/material/Box";
import Workspaces from "~/component/AppBar/Menu/workspaces";
import Typography from "@mui/material/Typography";

const BoardBar = () => {
  return (
    <Box
    px={49}
      sx={{
        // backgroundColor: "primary.dark",
 
        height: "55px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "7rem",
        }}
      >
        <Workspaces />
      </Box>

      <Box sx={{ display: "flex", gap: "100px" }}>
        <Typography sx={{ cursor: "pointer" }}>Trang chủ</Typography>

        <Typography sx={{ cursor: "pointer" }}>Sản phẩm</Typography>

        <Typography sx={{ cursor: "pointer" }}>Tin tức</Typography>

        <Typography sx={{ cursor: "pointer" }}>Giới thiệu</Typography>
      </Box>
    </Box>
  );
};
export default BoardBar;
