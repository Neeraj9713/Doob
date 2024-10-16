import { useEffect } from "react";
import "./App.css";
import About from "./component/About/About";
import Layout from "./component/Layout/Layout";
import Main from "./component/Main/Main";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Check from "./component/Check";

function App() {
  const location = useLocation();
  
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className={`h-full`}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/check" element={<Check/>}/>
          </Routes>
      </div>
    </>
  );
}

export default App;
