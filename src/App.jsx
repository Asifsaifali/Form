import "./App.css";
import Form from "./components/Form/Form";
import { FormPage } from "./components/Page/FormPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormPage />} />
          <Route path="/formPage" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
