import { Routes, Route } from "react-router-dom";
import Home from "./component/Home.js";
import ClassProps from "./component/ClassProps";
import FetchDataFunction from "./component/FetchDataFunction.js";
import FunctionProps from "./component/FunctionProps.js";
import TailWinds from "./component/TailWinds.js";
import FetchDataClass from "./component/FetchDataClass.js";
import JavascriptDasar from "./component/JavascriptDasar.js";
import SubmitdanInputClass from "./component/SubmitdanInputClass.js";
import SubmitdanInputFunction from "./component/SubmitdanInputFunction.js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/submitinput/function"
          element={<SubmitdanInputFunction />}
        />
        <Route path="/submitinput/class" element={<SubmitdanInputClass />} />
        <Route path="/jsdasar" element={<JavascriptDasar />} />
        <Route path="/fetchdataclass" element={<FetchDataClass />} />
        <Route path="/tailwinds" element={<TailWinds />} />
        <Route path="/fetchdatafunction" element={<FetchDataFunction />} />
        <Route
          path="props/class"
          element={<ClassProps name="ini props class" />}
        />
        <Route path="/" element={<Home name="ini props function" />} />
        <Route
          path="props/function"
          element={<FunctionProps name="ini props function" />}
        />
      </Routes>
    </div>
  );
}

export default App;
