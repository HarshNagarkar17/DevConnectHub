import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { Community } from "./pages/Community";

function App() {
  return (
   <Routes>
    <Route path="/" element={<Community/>}/>
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
   </Routes>
  );
}

export default App;