import "./App.css";
import Home from "./component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./component/Landing";
import CookieForm from "./component/CookieForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Cookie" element={<CookieForm />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
