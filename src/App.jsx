import "./App.css";
import Movie from "./Movie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/readmore/:id" element={<h1>This is readmore data</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
