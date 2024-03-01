import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ListItem from "./ListItem";
import { IListItem } from "~/interfaces/handleCheck";

const ResultProductItem = ({ itemBrand, checked }: IListItem) => {
  return (
    <Box
      sx={{
        width: "100%",
        m: 2,
        pb: 2,
        borderRadius: 3,
        bgcolor: "#eeeeee",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "7%",
          bgcolor: "primary.light",
          alignItems: "center",
          p: 2,
        }}
      >
        Categories
      </Box>
      <Box>
        <Grid container spacing={{ xs: 2 }}>
          <ListItem checked={checked} itemBrand={itemBrand} />
        </Grid>
      </Box>
    </Box>
  );
};

export default ResultProductItem;
