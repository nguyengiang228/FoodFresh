import Box from "@mui/material/Box";

import BoardItem from "~/component/BoardContent/BoardItem";

const BoardContent = () => {
  return (
    <>
      <Box
        px={48}
        sx={{
          display: "flex",
          // bgcolor: "primary.dark",
          height: "calc(100vh - (32px + 75px + 75px + 55px))",
          width: "100%",
        }}
      >
        <BoardItem />
      </Box>
    </>
  );
};

export default BoardContent;
