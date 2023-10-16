import React, { useState } from 'react'
import { decrement, increment, reset,incrementByAmount } from '../redux/counterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Counter() {
  const [amount,setAmount]=useState("")
  // dispatch action
  const dispatch = useDispatch()
  /// access store state value
  const count = useSelector((state)=>state.counterSlice.count)

  const handleSubmit=()=>{
    if(amount==""){
      alert("please provide amount")
    }
    else{
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }
  return (
    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
      <div className='w-25 d-flex justify-content-center align-items-center flex-column border rounded p-3'>
        <h1 style={{fontSize:'100px'}}>{count}</h1>
      <div className='w-100 d-flex justify-content-between align-items-center mt-5'>
        <button className='btn btn-warning ' onClick={()=>dispatch(decrement())}>Decrement</button>
        <button className='btn btn-danger ' onClick={()=>dispatch(reset())}>Reset</button>
        <button className='btn btn-success ' onClick={()=>dispatch(increment())}>Increment</button>
      </div>
      <div className='mt-3'>
      <input class="form-control" onChange={e=>setAmount(e.target.value)} value={amount} type="text" placeholder="Default input"/>
      <button type="button" onClick={handleSubmit} class="btn btn-success mt-2">Submit</button>
      </div>
      </div>
    </div>
  )
}

export default Counter
