import Box from "@mui/material/Box";
import Workspaces from "~/component/AppBar/Menu/workspaces";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";

const BoardBar = () => {
  return (
    <Box
      px={49}
      sx={{
        height: "55px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "White",
      }}
    >
      <Box
        sx={{
          pl: "5px",
        }}
      >
        <Workspaces />
      </Box>

      <Box sx={{ display: "flex", gap: "80px" }}>
        <Button
          sx={{
            width: "7rem",
            "&:hover": {
              bgcolor: "primary.light",
            },
          }}
        >
          <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
            Trang chủ
          </NavLink>
        </Button>

        <Button
          sx={{
            width: "7rem",
            "&:hover": {
              bgcolor: "primary.light",
            },
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/products"
          >
            Sản phẩm
          </NavLink>
        </Button>
        <Button
          sx={{
            width: "7rem",
            "&:hover": {
              bgcolor: "primary.light",
            },
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/news"
          >
            Tin tức
          </NavLink>
        </Button>
        <Button
          sx={{
            width: "7rem",
            "&:hover": {
              bgcolor: "primary.light",
            },
          }}
        >
          <NavLink
            style={{ textDecoration: "none", color: "black" }}
            to="/about"
          >
            Giới thiệu
          </NavLink>
        </Button>
      </Box>
    </Box>
  );
};
export default BoardBar;
