import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import BoardItem from "~/component/BoardContent/BoardItem";
import { Button, Typography } from "@mui/material";
import { red, green } from "@mui/material/colors";
import PostRecipe from "~/pages/HomePage/Component/Post";
import { useGetProductItemQuery } from "~/redux/api/api.caller";
import { useEffect, useState } from "react";
import { IProducts } from "~/interfaces/products";

const BoardContent = () => {
  const { data, isLoading } = useGetProductItemQuery();
  const [productValue, setProductValue] = useState<IProducts[]>([]);

  useEffect(() => {
    if (data) {
      setProductValue(data);
    }
  }, [data]);

  return (
    <>
      {!isLoading ? (
        <Box pl={8}>
          <Box
            px={42}
            sx={{
              // flexGrow: 1,
              height: "calc(245vh - (32px + 75px + 75px + 55px))",
              width: "100%",
            }}
          >
            <Box
              sx={{
                height: "80vh",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Button
                  sx={{
                    bgcolor: red[500],
                    "&:hover": {
                      bgcolor: red[700],
                    },
                    color: "white",
                    borderRadius: 50,
                    mt: 3,
                  }}
                  variant="contained"
                >
                  <Typography variant="h5">Hot Deal</Typography>
                </Button>
              </Box>
              <Grid container spacing={{ xs: 1, md: 1 }}>
                <BoardItem productValue={productValue} />
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                mb: 5,
              }}
            >
              <Button variant="outlined">
                <Typography variant="body1">Xem thêm...</Typography>
              </Button>
            </Box>
            <Box
              pl={1}
              sx={{
                height: "80vh",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                <Button
                  sx={{
                    bgcolor: green[500],
                    "&:hover": {
                      bgcolor: green[700],
                    },
                    color: "white",
                    borderRadius: 50,
                    mt: 3,
                  }}
                  variant="contained"
                >
                  <Typography variant="h5">Thực phẩm tươi sống</Typography>
                </Button>
              </Box>
              <Grid container spacing={{ xs: 2, md: 2 }}>
                <BoardItem productValue={productValue} />
              </Grid>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
                textAlign: "center",
                mb: 10,
              }}
            >
              <Button variant="outlined">
                <Typography variant="body1">Xem thêm...</Typography>
              </Button>
            </Box>
            <Box sx={{ width: "100%", height: "35vh" }}>
              <Typography
                sx={{ width: "100%", textAlign: "center" }}
                variant="h4"
              >
                NGUYÊN LIỆU NGON - CÔNG THỨC CHUẨN
              </Typography>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 5, md: 5 }}
              >
                <PostRecipe />
              </Grid>
            </Box>
          </Box>
        </Box>
      ) : (
        <>Loading...</>
      )}
    </>
  );
};

export default BoardContent;
