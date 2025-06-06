
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/signup/Signup";
import Login from "./components/login/Login";

function App() {

  return (
    <>
    
      <div className="bg-black text-white w-full h-full min-h-screen  lg:h-full ">
        {/* <SignUp/> */}
        <Routes>
          <Route element={<Home/>} path="/"/>
          <Route element={<SignUp/>} path="/signup"/>
          <Route element={<Login/>} path="/login"/>
        </Routes>
      
      </div>
    </>
  );
}

export default App;
