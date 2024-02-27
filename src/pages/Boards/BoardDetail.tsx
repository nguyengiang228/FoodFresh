import { Container } from "@mui/material";
import AppBar from "~/component/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";
import BoardCategories from "./BoardCategories";
import Footer from "~/component/Footer";
import Box from "@mui/material/Box";

function Board() {
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        sx={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,

          filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.32))",
          zIndex: 100,
        }}
      >
        <AppBar />
        <BoardBar />
        {/* <Divider /> */}
      </Box>
      <BoardCategories />
      <BoardContent />
      <Footer />
    </Container>
  );
}

export default Board;
