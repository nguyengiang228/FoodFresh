import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Close from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector, deleteCartItem } from "~/redux/features/dashboard.slice";
import { IProductsData, CartList, Cart } from "~/interfaces/products";
import { red } from "@mui/material/colors";
import { subtractCart, addToCart } from "~/redux/features/dashboard.slice";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const CartList = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector(cartSelector);
  const [checked, setChecked] = useState<boolean[]>(cartItem.map(() => false));
  const [totalPrice, setTotalPrice] = useState("0");
  const [productChecked, setProductChecked] = useState<number[]>([]);

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

  const caculatePrice = (cart: IProductsData[]) => {
    const total = cart.reduce(
      (accPrice, currPrice) => currPrice.price * currPrice.quantity + accPrice,
      0
    );
    setTotalPrice(total.toFixed(3));
  };

  const handleCheckboxSelected = (checkedArray: Array<number>) => {
    const listChecked = cartItem.map((item) => checkedArray.includes(item.id));

    setChecked(listChecked);
    if (cartItem) {
      const result = cartItem.filter((item) => checkedArray.includes(item.id));
      caculatePrice(result);
    }
    setProductChecked(checkedArray);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: number
  ) => {
    if (cartItem) {
      if (e.target.checked) {
        const checkedArray = Array.from(new Set([...productChecked, key]));
        handleCheckboxSelected(checkedArray);
      } else {
        const checkedArray = productChecked.filter((item) => item !== key);
        handleCheckboxSelected(checkedArray);
      }
    }
  };
  // Xử lý checkAll
  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkedArray = cartItem.map(() => event.target.checked);
    setChecked(checkedArray);
    if (event.target.checked) {
      if (cartItem) caculatePrice(cartItem);
    } else {
      setTotalPrice("0");
    }
  };

  useEffect(() => {
    if (checked.every((item) => item === false)) setTotalPrice("0");
  }, [checked]);

  return (
    <>
      {cartItem.length > 0 ? (
        <>
          <FormControlLabel
            sx={{ pl: 1 }}
            label="Chọn tất cả "
            control={
              <Checkbox
                checked={checked.every((item) => item === true)}
                // indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          <Box
            sx={{ maxHeight: "500px", overflow: "hidden", overflowY: "auto" }}
          >
            {cartItem.map((item, index) => (
              <Box key={index} sx={{ display: "flex", pl: 3 }}>
                <FormControlLabel
                  name="id"
                  label="|"
                  control={
                    <Checkbox
                      checked={checked[index]}
                      onChange={(e) => handleChange(e, item.id)}
                    />
                  }
                />
                <MenuItem
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
              </Box>
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
              {totalPrice}
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
