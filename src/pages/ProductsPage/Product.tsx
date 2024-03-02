import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import { useGetProductItemQuery } from "~/redux/api/api.caller";
import { IProducts } from "~/interfaces/products";
import ResultProductItem from "../HomePage/Component/Products/ResultItem";
import { listBrand } from "./config";
// import { listBrand } from "./config";

const Products = () => {
  const [itemBrand, setItemBrand] = useState<IProducts[]>([]);
  const [ValueChecked, setValueChecked] = useState<string[]>([]);
  const { data } = useGetProductItemQuery();
  const [checked, setChecked] = useState([false, false, false]);

  //setBrand nếu Có data thì itemBrand = data
  useEffect(() => {
    if (data) {
      setItemBrand(data);
    }
  }, [data]);

  const handleCheckboxSelected = (checkedArray: Array<string>) => {
    const listChecked = [
      checkedArray.includes(listBrand[0].label),
      checkedArray.includes(listBrand[1].label),
      checkedArray.includes(listBrand[2].label),
    ];
    setChecked(listChecked);
    if (data) {
      const result = data.filter((item) => checkedArray.includes(item.brand));
      setItemBrand(result);
    }

    setValueChecked(checkedArray);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    label: string
  ) => {
    if (data) {
      if (e.target.checked) {
        const checkedArray = Array.from(new Set([...ValueChecked, label]));
        handleCheckboxSelected(checkedArray);
      } else {
        const checkedArray = ValueChecked.filter((item) => item !== label);
        handleCheckboxSelected(checkedArray);
      }
    }
  };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
    if (event.target.checked) {
      if (data) setItemBrand(data);
    } else {
      setItemBrand([]);
    }
  };

  return (
    <>
      {data ? (
        <Box pl={52} pr={49} sx={{ width: "100%", display: "flex" }}>
          <Box
            sx={{
              width: "20%",
              height: "50%",
              m: 2,
              bgcolor: "#eeeeee",
              borderRadius: 3,
            }}
          >
            <Box sx={{ p: 2 }}>
              <FormControlLabel
                label="Thương hiệu"
                control={
                  <Checkbox
                    checked={checked[0] && checked[1] && checked[2]}
                    // indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />

              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                {listBrand.map((brand, index) => (
                  <FormControlLabel
                    name="Brand"
                    key={index}
                    label={brand.label}
                    control={
                      <Checkbox
                        checked={checked[index]}
                        onChange={(e) => handleChange(e, brand.label)}
                      />
                    }
                  />
                ))}
              </Box>
            </Box>
          </Box>
          <></>
          <ResultProductItem checked={checked} itemBrand={itemBrand} />
        </Box>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Products;
