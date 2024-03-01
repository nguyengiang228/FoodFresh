import Board from "~/pages/Boards/BoardDetail";
// import Authentication from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/ProductsPage/Product";
import BoardContent from "./pages/Boards/BoardContent";
import NoPage from "./pages/NoPage";
import NewsPage from "./pages/NewsPage/news";
import IntroductPage from "./pages/IntroductPage";

function App() {
  return (
    <Routes>
      {/* Board Detail */}
      <Route path="*" element={<NoPage />} />
      <Route path="/" element={<Board />}>
        <Route index path="/" element={<BoardContent />} />
        <Route path="/products" element={<Products />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/about" element={<IntroductPage />} />
      </Route>
    </Routes>
  );
}

export default App;
