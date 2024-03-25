import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBtn from "./pages/react-counter";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path ="/" element= {<Home />}/>
        <Route path ="reactcounter" element= {<AddBtn />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
