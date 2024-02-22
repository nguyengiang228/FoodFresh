import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { MenuList, Paper, Typography } from "@mui/material";
import { useGetCategoryQuery } from "~/redux/api/api.caller";
// import { ICategories } from "~/interfaces/categories";

// const initialState: ICategories = {
//   image: "",
//   title: "",
// };

const Workspaces = () => {
  const { data } = useGetCategoryQuery();
  // console.log(data);
  // const [category, setCategory] = useState<ICategories>(initialState);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // if (data) {
  //   console.log(data);
  // }
  return (
    <>
      <Box>
        <Button
          sx={{ float: "left" }}
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? true : undefined}
          onClick={handleClick}
        >
          {anchorEl === null ? (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <MenuIcon fontSize="large" />
              <Typography>Menu</Typography>
            </Box>
          ) : (
            <CloseIcon fontSize="large" />
          )}
        </Button>

        <Paper sx={{ width: 120, maxWidth: "100%" }}>
          <Menu
            sx={{ marginTop: 0.8 }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <MenuList sx={{ width: 190, maxWidth: "100%" }}>
              {data?.map((item, index) => (
                <MenuItem key={index} onClick={handleClose}>
                  <img
                    src={item.image}
                    alt="/"
                    style={{ width: 20, height: 20, marginRight: 5 }}
                  />
                  <a> {item.title}</a>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Paper>
      </Box>
    </>
  );
};

export default Workspaces;
