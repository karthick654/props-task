import React from 'react'
const Child = (props) => {
    console.log(props)
  return (
    <div>
      {props.newobj.map((e,ind)=>{
        return <div key = {ind}>
            <h1>Name:{e.name}</h1>
           <h2>Age:{e.age}</h2> 
           <h2>Salary: {e.salary}</h2>
            <button onClick= {()=>{props.getfun(e.salary)}} style={{padding:"10px",backgroundColor:"red",color:"white",border:"1px solid red"}}>Click Me!</button>
        </div>
      })}
    </div>
  )
}

export default Child
