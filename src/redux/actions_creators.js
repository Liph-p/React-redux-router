import {INCREMENT,DECREMENT} from "./actions_type"

export const createIncrementAction = value=>({type:INCREMENT,data:value})
export const createDecrementAction = value=>({type:DECREMENT,data:value})
export const createIncrementAsyncAction = (value,delay)=>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(createIncrementAction(value))
    },delay)
  }
}

