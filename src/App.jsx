import { useState } from 'react'
import './App.css'
import Ui from './components/Ui'



function App() {
  const [mines,setMines]=useState(0)
  const[show,setShow]=useState(false)
  const [arr,setarr]=useState([])
  const  setArr = () =>{

       let count=0;
      for(let i=0;i<56;i++){
             if(count==mines){
              arr[i]="green"
               
             }

           else{
            let num=Math.floor(Math.random()*2)
             if(num==1){
              arr[i]="green"
             }
             else{
              arr[i] ="red"
              count++
             }
           
           }
           

      }
       

        
  }



  
  return (
     
      <div className='flex flex-col w-full h-screen justify-center '
          >
           
      <div className='p-20 my-auto flex-row justify-center content-center h-fit bg-slate-800 rounded-2xl'
         hidden={show}
      >
         
             
              <form onSubmit={(e) => e.preventDefault()}>
                  
              <label className='text-white'>NO OF MINES: </label>
              <input  defaultValue={0}
                 
                 type='number'
                 min={0}
                 onChange={(e) => setMines(e.target.value)}
                 className='text-center rounded-md w-52 mx-2'
                 id='field'
                >
                 
          </input>
          <button className='bg-slate-100 m-2 px-2 w-18 rounded-lg'
                onClick={() =>{if(mines>0){setTimeout(()=>{setShow(true)
                  
                   
                },300)
                                
                setArr()                         
                } }}
                >
          SUBMIT
          </button>
              </form>
                
               
               
               
               

          </div>
          <Ui showUi={show}
              colors ={arr}      />
      </div>
     
      
  )
}



export default App
