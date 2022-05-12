import React,{useState} from 'react'
import { Link,NavLink } from 'react-router-dom'

function Question1({inputText,SetinputText}) {
const [display,setdisplay]=useState(1)
    const getInpput=(e)=>{
        console.log(e.target.value)
        SetinputText(e.target.value)
        
    }
    const SubmiteANs=(e)=>{
        e.preventDefault()
        setdisplay(display+1)
    

    }

    return (

    <div>
       
     { (display===1) ?  <form>

           {/* <StartQuiz/> 
           <button onClick={SubmiteANs}>Click to start Quiz</button> */}

       <h1>Wellcome to the Quiz App</h1>     
      <button onClick={SubmiteANs}>Click to start Quiz</button>
    </form> : '.'
}

{ (display===1) ?  <form>
            
            <h1>Question No 1
     
      </h1>     
      <h2>HTml stands for ?</h2>  
             <input onClick={getInpput} value="1" name="question1"type="radio" id="true"/> Hyper Text Markup Language
             <input onClick={getInpput} type="radio"  name="question1"value="0" id="false"/> Hyper Language
             {/* <br/><br/>  <NavLink to='Question2'>ada</NavLink> */}
             <button onClick={SubmiteANs}>Next123454</button>
         </form> : '.'
     }
{ (display===2) ?  <form>
            
            <h1>Question
     
      </h1>     
      <h2>HTml stands for ?</h2>  
             <input onClick={getInpput} value="1" name="question1"type="radio" id="true"/> Hyper Text Markup Language
             <input onClick={getInpput} type="radio"  name="question1"value="0" id="false"/> Hyper Language
             {/* <br/><br/>  <NavLink to='Question2'>ada</NavLink> */}
             <button onClick={SubmiteANs}>Next123454</button>
         </form> : '.'
     }
     { (display===3) ?  <form>
            
            <h1>Question no3
     
      </h1>     
      <h2>HTml stands for ?</h2>  
             <input onClick={getInpput} value="1" name="question1"type="radio" id="true"/> Hyper Text Markup Language
             <input onClick={getInpput} type="radio"  name="question1"value="0" id="false"/> Hyper Language
             {/* <br/><br/>  <NavLink to='Question2'>ada</NavLink> */}
             <button onClick={SubmiteANs}>Next123454</button>
         </form> : '.'
     }

    </div>

  )
}

export default Question1