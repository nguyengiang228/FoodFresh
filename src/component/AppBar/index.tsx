import { Box } from "@mui/material";
import { orange } from "@mui/material/colors";

const AppBar = () => {
  const bgcolor = orange[800];

  return (
    <>
      <Box
        sx={{
          backgroundColor: `${bgcolor}`,
          height: "32px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div>
          FREESHIP nội thành cho đơn hàng từ 500K (xem chi tiết ở chính sách
          giao hàng)
        </div>
      </Box>
      <Box
        sx={{
          height: "75px",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        AppBar
      </Box>
    </>
  );
};

export default AppBar;
