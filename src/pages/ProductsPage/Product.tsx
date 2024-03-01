import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import { useGetProductItemQuery } from "~/redux/api/api.caller";
import { IProducts } from "~/interfaces/products";
import { listBrand } from "./config";
import ResultProductItem from "../HomePage/Component/Products/ResultItem";

const Products = () => {
  const [itemBrand, setItemBrand] = useState<IProducts[]>([]);
  const [ValueChecked, setValueChecked] = useState<string[]>([]);
  const { data } = useGetProductItemQuery();

  //setBrand nếu Có data thì itemBrand = data
  useEffect(() => {
    if (data) {
      setItemBrand(data);
    }
  }, [data]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string
  ) => {
    if (itemBrand) {
      const brandChecked: string[] = [...ValueChecked, key];
      console.log(brandChecked);

      if (e.target.checked) {
        setValueChecked([...ValueChecked, key]);
        const result = itemBrand.filter((item) =>
          brandChecked.includes(item.brand)
        );
        console.log(result);

        // setItemBrand(result);
        // console.log(itemBrand);
      } else {
      }
    }

    // if (itemBrand) {
    //   const newArray: string[] = [...ValueChecked, key];
    //   if (e.target.checked) {
    //     setValueChecked([...newArray]);
    //     const result: IProducts[] = data.filter((item) =>
    //       newArray.includes(item.brand)
    //     );
    //     console.log(result);
    //     setItemBrand([...result]);
    //     setIsChecked(true);
    //   } else {
    //     setIsChecked(false);
    //   }
    // }
    // else {
    //   setIsChecked(false);
    // }
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
              <Typography sx={{ pl: "2rem", fontWeight: "bold" }}>
                Thương hiệu
              </Typography>
              {listBrand.map((brand, index) => (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          handleChange(e, brand.label)
                        }
                        value={brand.label}
                      />
                    }
                    label={brand.label}
                  />
                </FormGroup>
              ))}
            </Box>
          </Box>
          <></>
          <ResultProductItem itemBrand={itemBrand} />
        </Box>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default Products;
