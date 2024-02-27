import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useGetPostRecipeQuery } from "~/redux/api/api.caller";
import Typography from "@mui/material/Typography";

const PostRecipe = () => {
  const { data } = useGetPostRecipeQuery();
  console.log(data);
  return (
    <>
      {data &&
        data.map((post, index) => (
          <Grid key={index} item xs={6}>
            <Box
              sx={{
                display: "flex",
              }}
              pl={"23px"}
              mt={"25px"}
            >
              <Box>
                <img
                  style={{ width: "100px", height: "100px" }}
                  src={post.image}
                />
              </Box>
              <Box pl={2} sx={{ width: "300px" }}>
                <Typography
                  sx={{
                    display: "-webkit-box",
                    width: "100%",
                    height: "8vh",
                    fontWeight: "bold",
                    overflow: "hidden",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                  variant="body1"
                >
                  {post.title}
                </Typography>
                <Typography> {post.dateTime}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
    </>
  );
};

export default PostRecipe;
