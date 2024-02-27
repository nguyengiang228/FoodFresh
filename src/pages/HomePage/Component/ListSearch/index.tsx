import { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useGetProductWithSearchQuery } from "~/redux/api/api.caller";
import Box from "@mui/material/Box";

import { Autocomplete } from "@mui/material";
// import { Divider, Typography } from "@mui/material";

const ListSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const { data: singleProduct } = useGetProductWithSearchQuery(inputValue);

  // const handleChangeInput = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Autocomplete
          freeSolo
          sx={{ width: "50rem" }}
          disableClearable
          options={singleProduct?.map((option) => option.title) || [""]}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tìm kiếm sản phẩm..."
              InputProps={{
                ...params.InputProps,
              }}
            />
          )}
        />
        <Button
          variant="text"
          sx={{
            height: "57px",
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </Box>
    </>
  );
};

export default ListSearch;
