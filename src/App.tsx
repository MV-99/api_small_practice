import Contenedor from "./pages🦋/contenedorApi";
import Home from "./pages🦋/home1";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contenedor" element={<Contenedor/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
