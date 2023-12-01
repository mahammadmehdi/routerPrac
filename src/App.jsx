import { BrowserRouter,Route,Routes } from "react-router-dom";
import './App.css';
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route element = {<MainLayout></MainLayout>} >
        <Route path="/" element={<Home></Home>} /> 
        <Route path="/About" element={<About></About>} /> 
        <Route path="/Contact" element={<Contact></Contact>} /> 
        <Route path="/Products" element={<Products></Products>} /> 
        <Route path="/Detail/:id" element={<Detail></Detail>} /> 

        

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
