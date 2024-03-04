import { ListPrice } from "~/pages/ProductsPage/config";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useState } from "react";
import { IPriceCheckbox } from "./interface";
import { useGetProductItemQuery } from "~/redux/api/api.caller";

const CheckedPrice = ({ setValueItem }: IPriceCheckbox) => {
  const { data } = useGetProductItemQuery();
  const [ValueChecked, setValueChecked] = useState<string[]>([]);

  const [checkedPrice, setCheckedPrice] = useState([false, false, false]);

  const handleCheckboxSelected = (checkedArray: Array<string>) => {
    const listChecked = [
      checkedArray.includes(ListPrice[0].priceItem),
      checkedArray.includes(ListPrice[1].priceItem),
      checkedArray.includes(ListPrice[2].priceItem),
    ];
    // console.log(listChecked);

    setCheckedPrice(listChecked);
    if (data) {
      const result = data.filter((item) =>
        checkedArray.includes(String(item.price.toFixed(3)))
      );
      setValueItem(result);
      // console.log(result);
    }
    setValueChecked(checkedArray);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    if (data) {
      if (e.target.checked) {
        const checkedArray = Array.from(new Set([...ValueChecked, key]));
        handleCheckboxSelected(checkedArray);
      } else {
        const checkedArray = ValueChecked.filter((item) => item !== key);
        handleCheckboxSelected(checkedArray);
      }
    }
  };

  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedPrice([e.target.checked, e.target.checked, e.target.checked]);
    if (e.target.checked) {
      if (data) setValueItem(data);
    } else {
      if (data) setValueItem(data);
    }
  };

  return (
    <Box
      sx={{
        p: 2,
        mt: 5,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        bgcolor: "#eeeeee",
      }}
    >
      <FormControlLabel
        label="Giá "
        control={
          <Checkbox
            checked={checkedPrice[0] && checkedPrice[1] && checkedPrice[2]}
            onChange={handleChange1}
          />
        }
      />

      <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
        {ListPrice.map((price, index) => (
          <FormControlLabel
            name="Price"
            key={index}
            label={price.priceItem}
            control={
              <Checkbox
                checked={checkedPrice[index]}
                onChange={(e) => handleChange(e, price.priceItem)}
              />
            }
          />
        ))}
      </Box>
    </Box>
  );
};

export default CheckedPrice;
