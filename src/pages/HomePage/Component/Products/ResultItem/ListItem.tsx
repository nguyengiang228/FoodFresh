import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addToCart } from "~/redux/features/dashboard.slice";
import { IProducts, IProductsData } from "~/interfaces/products";

const ListItem = ({ itemBrand }: { itemBrand: IProducts[] }) => {
  const dispatch = useDispatch();
  // console.log(isChecked);
  // console.log(itemBrand);

  const handleAddToCart = ({
    id,
    title,
    image,
    quantity,
    totalPrice,
    price,
    brand,
  }: IProductsData) => {
    dispatch(
      addToCart({ id, title, image, quantity, totalPrice, price, brand })
    );
  };
  return (
    <>
      {itemBrand.length && (
        <>
          {itemBrand.map((item, index) => (
            <Grid key={index} item>
              <Box
                sx={{
                  width: 170,
                  height: 272,
                  m: 2,
                  border: "1px solid #c3c3c3",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <img style={{ width: 168, height: "auto" }} src={item.image} />
                <Typography
                  sx={{
                    display: "-webkit-box",
                    pl: 1,
                    width: "100%",
                    fontWeight: "bold",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                  variant="body1"
                >
                  {item.title}
                </Typography>
                <Box
                  px={1}
                  sx={{
                    display: "flex",
                    mt: 2,
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>{item.price.toFixed(3)}₫</Typography>
                  <Button
                    sx={{ mr: -2, p: 0, width: "5px" }}
                    onClick={() =>
                      handleAddToCart({
                        id: item.id,
                        title: item.title,
                        image: item.image,
                        quantity: item.quantity,
                        totalPrice: item.totalPrice,
                        price: item.price,
                        brand: item.brand,
                      })
                    }
                    // variant="outlined"
                  >
                    <AddShoppingCartIcon
                      sx={{
                        backgroundColor: "primary.light",
                        color: "white",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    />
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </>
      )}
    </>
  );
};

export default ListItem;