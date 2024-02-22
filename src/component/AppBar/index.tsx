import { ReactComponent as LogoIcon } from "~/assets/logo.svg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import SvgIcon from "@mui/material/SvgIcon";
import SearchIcon from "@mui/icons-material/Search";
import Account from "~/pages/HomePage/Component/Acccount";
import ShopingCard from "~/pages/HomePage/Component/ShopingCard";

const AppBar = () => {
  return (
    <>
      <Box
        px={45}
        sx={{
          height: "70px",
          width: "90%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: 200, mr: 2 }}>
          <SvgIcon
            component={LogoIcon}
            inheritViewBox
            sx={{ width: "10vw", height: "25vh" }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", pl: "20px" }}>
          <TextField
            label="Tìm kiếm sản phẩm..."
            variant="outlined"
            type="search"
            size="small"
            sx={{
              width: "47rem",
            }}
          />
          <Button
            variant="text"
            sx={{
              height: "57px",
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }}
          >
            <SearchIcon fontSize="large" />{" "}
          </Button>
        </Box>
        <Box sx={{ borderLeft: `1px solid #e5e5e5` }}>
          <Account />
        </Box>
        <Box sx={{ borderLeft: `1px solid #e5e5e5` }}>
          <ShopingCard />
        </Box>
      </Box>
    </>
  );
};

export default AppBar;
