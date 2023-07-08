import { useState } from "react";
import React from 'react'


function Cardmain() {

  const [cel, setcel] = useState('0')
  const [Far, SetFar] = useState('0')

  const HandleUserInput=(e)=>{
    console.log('In Cel',e.target.value)
    setcel((e.target.value.toString()))
    console.log(cel)

    // if(cel){
      const res = ((cel*(9/5))+32)
      SetFar(res)
      console.log(res)

    // }
    // (C × 9/5) + 32 = F
  }
  const HandleUserInput1=(e)=>{
    console.log('In Far')
    SetFar((e.target.value.toString()))
    const res = (Far-32)/(9/5)
    console.log(res)
      setcel(res)
      console.log(Far)
  }


  return (
    <div>
        <div className="card mx-auto" style={{"width": "20rem"}}>
       <div className="card-body">
                    <h5 className="card-title">Temperature Converter</h5>
                    {/* <p className="card-text" style={{backgroundColor:'#ff8000'}}>Formula</p> */}
                    <p className="card-text">Formula</p>
                    <p>(19.44&deg;C * 9/5) + 32 = 67&deg;F</p>
                   
                    <input placeholder='Celcius' value={cel} 
                      onChange={(e)=>{
                        console.log(e.target)
                        HandleUserInput(e)
                                     }}/>

                      <fieldset disabled>
                       <select class="custom-select ">
                       <option selected>Celcius</option>
                       </select>
                       </fieldset>
                   
                  
                    <input placeholder='Far' value={Far} 
                      onChange={(e)=>{
                        HandleUserInput1(e)}}
                       style={{'marginTop': '20px'}} />

                      <fieldset disabled>
                       <select class="custom-select mr-sm-2">
                       <option selected>Fahrenheit</option>
                       </select>
                       </fieldset>
                    
        </div>
    </div>
    </div>
  )
}

export default Cardmain
