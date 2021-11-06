import {INCREMENT,DECREMENT} from "./actions_type"

let initState = 0
export default function operaCount(preState=initState,action){
  console.log('------reducer调用了--------',action);
  let {type,data} = action
  let newState
  switch(type){
    case INCREMENT:
      newState = preState + data
      console.log(newState);
      return newState
    case DECREMENT:
      newState = preState - data
      return newState
    default:
      return preState
  }
}