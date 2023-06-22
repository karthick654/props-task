import React from 'react'
import Child from '../Child'


var obj = [
    {name:"Employee1",age:40,salary:20000},
    {name:"Employee2",age:50,salary:30000},
    {name:"Employee3",age:54,salary:40000}
]

const Parent = () => {
const newobj = (param)=>{
    let display = obj.filter((check)=>{
        return check.salary <param ?check:'';
    })
    console.log(display)
}

  return (
    <div>
      <Child newobj={obj}  getfun = {newobj}/>
    </div>
  )
}

export default Parent
