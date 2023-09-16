import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Stonk from "./pages/Stonk";
import About from "./pages/About";
import "./App.css";
import data from "../src/data"

function App() {
  console.log(data);

  return (
    <div>
      <Nav />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stocks" element={<Dashboard stonkData={data}/>} />
        <Route path="/stocks/:symbol" element={<Stonk stonkData={data}/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
