import React from 'react'
import Tile from './Tile'
export default function Ui({showUi,colors=[]}) {
    
      console.log(colors)
    return (
        <>
         <div className='flex gap-2'>

         <div className='grid grid-cols-7 gap-3' hidden={!showUi}>

     { 
    colors.map((val,i) => 
                    {return(<Tile key={i} color={colors[i]}/>)}



    )


              }


</div>


         </div>
         


       
          
          
        </>
    )
}
