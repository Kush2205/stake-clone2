import React from 'react'
import { useState } from 'react'
export default function Tile({color}) {
    const[colour,setColour] = useState("")
    function change(){
         setColour(color)
           if(color=="red"){
            setTimeout(() => {alert("GAME OVER")},200)
            setTimeout(() => history.go(0),600)
           }
    }
   
    return (
        <>
            <button className='rounded-md w-14 h-14 inline-block m-3 bg-slate-500'
            style={{backgroundColor:colour}}
              onClick={change}
            >




            </button>
        </>
    )
}
