import React, { useEffect, useState } from 'react'
import Botole from '../Botole/Botole'
import './Botolles.css'
import { AddTOLS, getstoredCart } from '../../Utilizes/localStorage'
export default function Botolles() {
    const [bottoles ,setbotoles] = useState([])
    const [cart , setcart] = useState([])
    
    useEffect(()=>{
        fetch('botoles.json')
        .then(res=> res.json())
        .then(data=> setbotoles(data))
    },[])

    //load cart from localStorage
    useEffect(()=>{
      //bottoles ar length jodhi 0 ar thka besi hooy thly load hbe
      if(bottoles.length>0){
        const storedcart = getstoredCart()
        // console.log(storedcart)
        const saveCart = []
        for(const id of storedcart){
          // console.log(id)
          
          const bottol = bottoles.find(bottol=>bottol.id === id)
          if(bottol){
            saveCart.push(bottol)
          }
        }
        console.log(saveCart)
        setcart(saveCart)
      }
      
    },[bottoles])

    const handelBtn =botole=>{
        // console.log(botole)
        const newCart =[...cart ,botole]
        setcart(newCart)
        AddTOLS(botole.id)
        
    }
  return (
    <div>
      <h3>Botolles : {bottoles.length} </h3>
      <h2>Cart:{cart.length}</h2>
      <div className='botoleContainer'>
        {
            bottoles.map(bottol => 
            <Botole 
                key={bottol.id}
                bottol={bottol}
                handelBtn={handelBtn}
                ></Botole>)
        }
      </div>  
    </div>
  )
}
