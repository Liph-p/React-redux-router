import {connect} from "react-redux"
import Counter from "../components/counter"
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../redux/actions_creators"


// function mapStateToProps(state){
//   return {count:state}
// }
// function mapDispatchToProps(dispatch){
//   return {
//     increment:(value)=>{dispatch(createIncrementAction(value))},
//     decrement:(value)=>{dispatch(createDecrementAction(value))}
//   }
// }


export default connect(
  state=>({count:state}),
  {
    increment:createIncrementAction,
    decrement:createDecrementAction,
    incrementAsync:createIncrementAsyncAction
  }  
  )(Counter)