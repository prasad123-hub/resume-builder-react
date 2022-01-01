import "./App.css";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import Builder from "./Components/Builder";
import ViewResume from "./Components/ViewResume";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="builder" element={<Builder />}></Route>
        <Route path="view" element={<ViewResume />}></Route>
      </Routes>
    </div>
  );
}

export default App;
