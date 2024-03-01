import Box from "@mui/material/Box";
import Workspaces from "~/component/AppBar/Menu/workspaces";
import { NavLink } from "react-router-dom";

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
          display: "flex",
          alignItems: "center",
          // width: "10rem",
          pl: "5px",
        }}
      >
        <Workspaces />
      </Box>

      <Box sx={{ display: "flex", gap: "80px" }}>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/">
          Trang chủ
        </NavLink>
        <NavLink
          style={{ textDecoration: "none", color: "black" }}
          to="/products"
        >
          Sản phẩm
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/news">
          Tin tức
        </NavLink>
        <NavLink style={{ textDecoration: "none", color: "black" }} to="/about">
          Giới thiệu
        </NavLink>
      </Box>
    </Box>
  );
};
export default BoardBar;
