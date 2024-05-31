import './App.css';
import {Route, Routes} from "react-router";
import Landing from "./entities/landing/landing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Landing/>}/>
      </Routes>
    </div>
  );
}

export default App;
