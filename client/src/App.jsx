import "./assets/reset.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import "./App.css";


function App() {
  
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
