import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Close from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, deleteCartItem } from "~/redux/features/dashboard.slice";
import { IProductsData, CartList, Cart } from "~/interfaces/products";
import { red } from "@mui/material/colors";
import { subtractCart, addToCart } from "~/redux/features/dashboard.slice";
import Divider from "@mui/material/Divider";

const CartList = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(cartSelector);

  const handleAddCard = ({
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
  const handleSubtractCard = ({ id, quantity, totalPrice }: CartList) => {
    dispatch(subtractCart({ id, quantity, totalPrice }));
  };
  const handleDeleteCard = ({ id, totalPrice }: Cart) => {
    dispatch(deleteCartItem({ id, totalPrice }));
  };

  const totalPrice = cartItem.reduce(
    (accPrice, currPrice) => currPrice.price * currPrice.quantity + accPrice,
    0
  );
  return (
    <>
      {cartItem.length > 0 ? (
        <>
          <Box
            sx={{ maxHeight: "500px", overflow: "hidden", overflowY: "auto" }}
          >
            {cartItem.map((item, index) => (
              <MenuItem
                key={index}
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Box>
                  <img
                    style={{ width: "60px", height: "auto" }}
                    src={item.image}
                    alt="/"
                  />
                </Box>
                <Box>
                  <Box sx={{ display: "flex" }}>
                    <Box
                      sx={{
                        width: "fit-content",
                        height: "auto",
                        ml: 1.5,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        whiteSpace: "wrap",
                      }}
                    >
                      <Typography
                        sx={{ width: "200px", fontWeight: "bold" }}
                        variant="body2"
                        gutterBottom
                      >
                        {item.title}
                      </Typography>
                    </Box>
                    <Box
                      onClick={() =>
                        handleDeleteCard({
                          id: item.id,
                          totalPrice: item.totalPrice,
                        })
                      }
                    >
                      <Close />
                    </Box>
                  </Box>
                  <Box sx={{ ml: 1.5 }}>
                    <Typography variant="body2">KHAY</Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: " center" }}>
                      <Button
                        onClick={() =>
                          handleSubtractCard({
                            id: item.id,
                            quantity: item.quantity,
                            totalPrice: item.totalPrice,
                          })
                        }
                      >
                        <RemoveIcon />
                      </Button>
                      <Typography> {item.quantity}</Typography>
                      <Button
                        onClick={() =>
                          handleAddCard({
                            id: item.id,
                            title: item.title,
                            image: item.image,
                            quantity: item.quantity,
                            totalPrice: item.totalPrice,
                            price: item.price,
                            brand: item.brand,
                          })
                        }
                      >
                        <AddIcon />
                      </Button>
                    </Box>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.price.toFixed(3)}đ
                    </Typography>
                  </Box>
                </Box>
                <Divider />
              </MenuItem>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              p: 2,
            }}
          >
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="subtitle1"
              gutterBottom
            >
              TỔNG TIỀN:
            </Typography>
            <Typography sx={{ fontWeight: "bold" }} variant="h6" gutterBottom>
              {totalPrice.toFixed(3)}
            </Typography>
          </Box>
          <Button
            sx={{
              width: "100%",
              fontWeight: "bold",
              bgcolor: red[600],
              color: "white",

              "&:hover ": {
                bgcolor: red[400],
              },
            }}
          >
            Thanh Toán
          </Button>
        </>
      ) : (
        <>
          <Box sx={{ m: 3 }}>
            <MenuItem>
              <Typography>Chưa có sản phẩm trong giỏ hàng</Typography>
            </MenuItem>
          </Box>
        </>
      )}
    </>
  );
};

export default CartList;
