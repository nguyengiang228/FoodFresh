import { useGetProductItemQuery } from "~/redux/api/api.caller";
import Box from "@mui/material/Box";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "~/redux/features/dashboard.slice";
import { IProductsData } from "~/interfaces/products";

const BoardItem = () => {
  const { data } = useGetProductItemQuery();
  // console.log(data);

  const dispatch = useDispatch();
  // const cart = useSelector(cartSelector);
  // console.log("AddCart: ", cart);

  const handleAddToCart = ({
    id,
    title,
    image,
    quantity,
    totalPrice,
    price,
  }: IProductsData) => {
    console.log("he;o", id);

    dispatch(addToCart({ id, title, image, quantity, totalPrice, price }));
  };

  return (
    <>
      {data &&
        data.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: 170,
              height: 260,
              m: 2,
              border: "1px solid #c3c3c3",
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img style={{ width: 158, height: "auto" }} src={item.image} />
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
              sx={{ display: "flex", mt: 2, justifyContent: "space-between" }}
            >
              <Typography>{item.price}₫</Typography>
              <Button
                sx={{ p: 0 }}
                onClick={() =>
                  handleAddToCart({
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    quantity: item.quantity,
                    totalPrice: item.totalPrice,
                    price: item.price,
                  })
                }
                variant="outlined"
              >
                ADD
                {/* <AddShoppingCartIcon
                  sx={{
                    backgroundColor: "primary.light",
                    color: "white",
                    borderRadius: 1,
                    cursor: "pointer",
                  }}
                /> */}
              </Button>
            </Box>
          </Box>
        ))}
      {/* Cart  */}
    </>
  );
};

export default BoardItem;
