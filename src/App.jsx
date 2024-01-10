import './App.css'
import Form from './components/Form/Form'
// import { FormPage } from './components/Page/FormPage';
import { FormPage } from './components/Page/FormPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

 
  // const handlePrint = ()=>{
  //   window.print();
  // }
  return (
    <>
      {/* <button onClick={handlePrint}>🖨️</button>  */}
     
     <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/formPage" element={<Form />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
