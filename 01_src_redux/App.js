import React,{Component} from "react";
import {createIncrementAction,createDecrementAction} from "./redux/actions_creators"

export default class App extends Component{
  // state = {
  //   count:0
  // }
  componentDidMount(){
    console.log(this.props.store);
  }
  increment = ()=>{
    let {value} = this.selectNumber
    this.props.store.dispatch(createIncrementAction(value*1));
    // count = count + value*1
    // this.setState({count})
  }
  decrement = ()=>{
    let {value} = this.selectNumber
    this.props.store.dispatch(createDecrementAction(value*1));
    // count = count - value*1
    // this.setState({count})
  }
  incrementIfOdd = ()=>{
    let {value} = this.selectNumber
    let count = this.props.store.getState()
    if(count%2===1){
      this.props.store.dispatch(createIncrementAction(value*1));
    }
  }
  incrementAsync = ()=>{
    let {value} = this.selectNumber
    setTimeout(()=>{
      this.props.store.dispatch(createIncrementAction(value*1));
    },1000)
  }
  render(){
    let count = this.props.store.getState()
    return (
      <div>
        <h3>当前计数为:{count}</h3>    
        <select ref={(input)=>{this.selectNumber=input}}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
        <button onClick={this.incrementAsync}>increment async</button>&nbsp;
      </div>
    )
  }
}
