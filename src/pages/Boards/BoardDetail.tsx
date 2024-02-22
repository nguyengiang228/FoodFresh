import { Container, Divider } from "@mui/material";
import AppBar from "~/component/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import BoardCategories from "./BoardCategories";

// import Categories from "~/component/AppBar/Menu/categories";

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        height: "100vh",
      }}
    >
      <AppBar />
      <Divider />
      <BoardBar />
      <BoardCategories />
      <BoardContent />

      {/* <Categories /> */}
      {/* <Routes>
      <Route path="/" element={<Home />} />
    </Routes> */}
    </Container>
  );
}

export default Board;
