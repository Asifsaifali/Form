import './App.css'
<<<<<<< HEAD
import Form from './components/Form/Form'
// import { FormPage } from './components/Page/FormPage';
import FormPage from './components/Page/FormPage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
=======
// import Form from './components/Form/Form'
import {FormPage} from './components/Page/FormPage';
>>>>>>> a71d57a2cbc4e154177ae04c039afc37baa35d44
function App() {

 
  // const handlePrint = ()=>{
  //   window.print();
  // }
  return (
    <>
<<<<<<< HEAD
    {/* //    <Form />
    //   <button onClick={handlePrint}>🖨️</button>  */}
     
     <Router>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/formPage" element={<Form />} />
      </Routes>
    </Router>
=======
       {/* <Form />
      <button onClick={handlePrint}>🖨️</button> */}
      <FormPage/>
>>>>>>> a71d57a2cbc4e154177ae04c039afc37baa35d44
    </>
  )
}

export default App
