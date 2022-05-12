import React,{useState} from 'react'
import { render } from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Question1 from './components/Question1'
import Question2 from './components/Question2';


function App() {
const [inputText,SetinputText] =useState("")

  return (
    <div>
     
      <Question1 inputText={inputText} SetinputText={SetinputText}/>
      <BrowserRouter>
      <Navbar/>
    <Routes>
    {/* <Route path="/" element={<Question2  />} /> */}
      
      <Route path="/Question2" element={<Question2/>} />
      
    </Routes>
  </BrowserRouter>
      
    </div>
  )
}

export default App