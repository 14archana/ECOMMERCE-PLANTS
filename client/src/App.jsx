// import { BrowserRouter ,Routes,Reoute, Route} from "react-router-dom"
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import 'tailwindcss/tailwind.css';



// function App() {
//   return (
//      <div>
// <BrowserRouter>
// <Routes>
// <Route path="/" element={<Home />} />
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Register" element={<Register />} />
//   </Routes>
//   </BrowserRouter>
//      </div>
// );}

// export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
