import './App.css'
import Form from './components/Form/Form'
function App() {

 
  const handlePrint = ()=>{
    window.print();
  }
  return (
    <>
      <Form />
      <button onClick={handlePrint}>🖨️</button>
    </>
  )
}

export default App
