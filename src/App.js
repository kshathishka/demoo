import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Reg";
import Home from "./home";
function App() {
  return (
    <>
    <h1>Iam App</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/Reg" element={<Register/>} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
