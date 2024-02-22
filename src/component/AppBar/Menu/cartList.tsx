import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Close from "@mui/icons-material/Close";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { cartSelector } from "~/redux/features/dashboard.slice";
import { red } from "@mui/material/colors";

interface CartlistProp {
  state: number;
  handleAddCard: () => void;
  handleRemoveCard: () => void;
}

const CartList = ({ state, handleAddCard, handleRemoveCard }: CartlistProp) => {
  // const dispatch = useDispatch();
  const cartItem = useSelector(cartSelector);
  return (
    <>
      {cartItem.length > 0 ? (
        <>
          <Box>
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
                    <Box>
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
                      <Button onClick={handleRemoveCard}>
                        <RemoveIcon />
                      </Button>
                      <Typography> {state}</Typography>
                      <Button onClick={handleAddCard}>
                        <AddIcon />
                      </Button>
                    </Box>

                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.price}đ
                    </Typography>
                  </Box>
                </Box>
              </MenuItem>
            ))}
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
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
            <Typography
              sx={{ fontWeight: "bold" }}
              variant="subtitle1"
              gutterBottom
            >
              {}
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
          <Box>
            <Typography>Chưa có sản phẩm trong giỏ hàng</Typography>
          </Box>
        </>
      )}
    </>
  );
};

export default CartList;
