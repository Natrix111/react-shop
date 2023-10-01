import { Route, Router, Routes } from "react-router-dom";
import Home from "../src/components/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return(
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/registration" Component={Register}/>
      </Routes>
  );
}

export default App;
