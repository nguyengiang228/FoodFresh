import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
import { useGetProductItemQuery } from "~/redux/api/api.caller";
import { IProducts } from "~/interfaces/products";
import ResultProductItem from "../HomePage/Component/Products/ResultItem";
// import { listBrand } from "./config";

const Products = () => {
  const [itemBrand, setItemBrand] = useState<IProducts[]>([]);
  const [ValueChecked, setValueChecked] = useState<string[]>([]);
  const { data } = useGetProductItemQuery();
  const [checked, setChecked] = useState([true, false]);

  //setBrand nếu Có data thì itemBrand = data
  useEffect(() => {
    if (data) {
      setItemBrand(data);
    }
  }, [data]);

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   key: string
  // ) => {
  //   if (itemBrand) {
  //     const brandChecked: string[] = [...ValueChecked, key];
  //     console.log(brandChecked);

  //     if (e.target.checked) {
  //       setValueChecked([...ValueChecked, key]);
  //       const result = itemBrand.filter((item) =>
  //         brandChecked.includes(item.brand)
  //       );
  //       console.log(result);

  //       // setItemBrand(result);
  //       // console.log(itemBrand);
  //     }
  //   }

  //   // if (itemBrand) {
  //   //   const newArray: string[] = [...ValueChecked, key];
  //   //   if (e.target.checked) {
  //   //     setValueChecked([...newArray]);
  //   //     const result: IProducts[] = data.filter((item) =>
  //   //       newArray.includes(item.brand)
  //   //     );
  //   //     console.log(result);
  //   //     setItemBrand([...result]);
  //   //     setIsChecked(true);
  //   //   } else {
  //   //     setIsChecked(false);
  //   //   }
  //   // }
  //   // else {
  //   //   setIsChecked(false);
  //   // }
  // };

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
    if (checked[1]) {
      const result = itemBrand.map((item) => item);
      console.log(result);

      setItemBrand(result);
    }
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
    // console.log(itemBrand);

    if (itemBrand) {
      if (checked) {
        const resultBrand = itemBrand.filter(
          (item) => item.brand === "VietNam"
          // brandChecked.includes(item.brand)
        );
        console.log(resultBrand);

        setItemBrand(resultBrand);
        // console.log(itemBrand);
      }
    } else {
      return [];
    }
  };

  const handleCheck = () => {};
  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked, checked[1]]);
  };

  // const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked([checked[0], checked[0], event.target.checked]);
  // };
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
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />
                }
              />

              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  // key={index}
                  label="VN"
                  control={
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                  }
                />
                {/* {listBrand.map((brand, index) => (
                ))} */}

                <FormControlLabel
                  label="USA"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
                {/* <FormControlLabel
                  label="Other"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange4} />
                  }
                /> */}
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
