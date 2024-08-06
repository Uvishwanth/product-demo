import { Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Demo from "./component/Demo";


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/demo' element={<Demo/>}/> 
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
