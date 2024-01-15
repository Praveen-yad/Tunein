import Landing from "./Pages/Landing";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Route,Routes } from "react-router-dom";

const App=()=>{
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/home" element={<Homepage/>} />
        </Routes>
    </BrowserRouter>
  )


}
export default App