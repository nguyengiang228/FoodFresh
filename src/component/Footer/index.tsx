import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ReactComponent as LogoIcon } from "~/assets/logo.svg";
import SvgIcon from "@mui/material/SvgIcon";
import { grey } from "@mui/material/colors";
import { Typography } from "@mui/material";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      px={45}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        maxHeight: "auto",
        bgcolor: grey[100],
      }}
    >
      <Box sx={{ display: "block", alignItems: "center", width: 300, mr: 2 }}>
        <SvgIcon
          component={LogoIcon}
          inheritViewBox
          sx={{
            width: "25vw",
            height: "30vh",
            transform: "translateY(-20%) translateX(-10%)",
          }}
        />
        <Typography
          px={6}
          sx={{ width: 380, transform: "translateY(-150px)" }}
          variant="body1"
        >
          &emsp; SOFRESH đồng hành và hỗ trợ nông sản Việt, mang đến cho khách
          hàng thực phẩm “3 Sạch” : Sạch từ nông trại - Sạch qua quá trình sơ
          chế, chế biến - Sạch đến bàn ăn.
          <Typography>
            &emsp; 8 siêu thị và một xưởng sản xuất thực phẩm hoạt động trên địa
            bàn TP. Hà Nội phục vụ thực phẩm tươi, sạch, đảm bảo chất lượng và
            an toàn.
          </Typography>
        </Typography>
      </Box>
      <Box pt={8} sx={{ textAlign: "center" }}>
        <Typography variant="h5"> Hệ thống cửa hàng</Typography>
        <img
          style={{ width: 120, paddingTop: 20 }}
          src="https://file.hstatic.net/200000460455/file/map_fcd79b482a614d2a99822d0b2c5d3567.png"
        />
      </Box>
      <Box pt={8} sx={{}}>
        <Typography variant="h5">Hỗ trợ khách hàng</Typography>
        <ul>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Giới thiệu
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Liên hệ
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Chính sách đổi trả
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Chính sách bảo mật
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none", color: "black" }} to="/">
              Chính sách giao hàng
            </Link>
          </li>
        </ul>
      </Box>
      <Box pt={8} sx={{}}>
        <Typography variant="h5"> Liên hệ chúng tôi </Typography>
        <Box pt={2} sx={{ display: "flex", justifyContent: "space-around" }}>
          <CallOutlinedIcon fontSize="large" />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            098 765 4321
          </Typography>
        </Box>

        <Box pt={3} sx={{ justifyContent: "space-between" }}>
          <Button
            variant="outlined"
            sx={{ width: "auto", pl: 0, pr: 0, borderRadius: "10px" }}
          >
            <MailIcon sx={{ p: 0 }} fontSize="large" />
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "auto",
              pl: 0,
              pr: 0,
              ml: "5px",
              borderRadius: "10px",
            }}
          >
            <FacebookIcon sx={{ p: 0 }} fontSize="large" />
          </Button>
          <Button
            variant="outlined"
            sx={{
              width: "auto",
              pl: 0,
              pr: 0,
              ml: "5px",
              borderRadius: "10px",
            }}
          >
            <YouTubeIcon sx={{ p: 0 }} fontSize="large" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
