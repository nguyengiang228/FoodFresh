import { useMemo, useRef, useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { useGetProductWithSearchQuery } from "~/redux/api/api.caller";
import Box from "@mui/material/Box";

import { Autocomplete } from "@mui/material";
import { useDebounce } from "~/hooks";

const ListSearch = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce<string>(inputValue, 500);
  const { data } = useGetProductWithSearchQuery(debouncedValue);
  const htmlRef = useRef<HTMLDivElement>(null);

  const productList = useMemo(() => {
    if (data) {
      return data.map((option) => option.title);
    }
    return [];
  }, [data]);

  const handleFocus = () => {
    // console.log("htmlRef", htmlRef.current);
    if (htmlRef.current) {
      htmlRef.current.focus();
    }
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Autocomplete
          freeSolo
          sx={{ width: "50rem" }}
          disableClearable
          options={productList}
          renderInput={(params) => {
            // setInputValue(String(params.inputProps.value));
            return (
              <TextField
                {...params}
                label="Tìm kiếm sản phẩm..."
                onChange={(e) => setInputValue(e.target.value)}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
                inputRef={htmlRef}
              />
            );
          }}
        />
        <Button
          onClick={handleFocus}
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
