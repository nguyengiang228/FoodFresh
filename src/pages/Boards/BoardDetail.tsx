import { Container } from "@mui/material";
import AppBar from "../../component/AppBar";
import BoardBar from "./BoardBar";
import BoardContent from "./BoardContent";

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
      <BoardBar />
      <BoardContent />

      {/* <Routes>
      <Route path="/" element={<Home />} />
    </Routes> */}
    </Container>
  );
}

export default Board;
