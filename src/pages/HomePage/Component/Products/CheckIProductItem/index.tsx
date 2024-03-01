import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@mui/material";
// import { useGetProductItemQuery } from "~/redux/api/api.caller";

const CheckProduct = () => {
  // const { data } = useGetProductItemQuery();

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.checked);

    // if (e.target.checked) {
    //   const result = data?.filter((item) => item.brand === "vn");
    //   return result;
    //   // console.log(result);
    // }
  };

  return (
    <>
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
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleCheck} value="vn" />}
              label="Việt Nam"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleCheck} value="usa" />}
              label="Úc - Mỹ"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleCheck} value="other" />}
              label="Khác"
            />
          </FormGroup>
        </Box>

        {/* <Box sx={{ p: 2 }}>
          <Typography sx={{ pl: "2rem", fontWeight: "bold" }}>Loại</Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="item1" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="item2"
            />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="item3" />
          </FormGroup>
        </Box>

        <Box sx={{ p: 2 }}>
          <Typography sx={{ pl: "2rem", fontWeight: "bold" }}>
            Khuyến mãi
          </Typography>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="item1" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="item2" />
          </FormGroup>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="item3"
            />
          </FormGroup>
        </Box> */}
      </Box>
    </>
  );
};

export default CheckProduct;
