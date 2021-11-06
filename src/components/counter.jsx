import React,{Component} from "react";

export default class App extends Component{
  // state = {
  //   count:0
  // }
  componentDidMount(){
    console.log(this.props);
  }
  increment = ()=>{
    let {value} = this.selectNumber
    // this.props.store.dispatch(createIncrementAction(value*1));
    this.props.increment(value*1)
  }
  decrement = ()=>{
    let {value} = this.selectNumber
    // this.props.store.dispatch(createDecrementAction(value*1));
    this.props.decrement(value*1)
  }
  incrementIfOdd = ()=>{
    let {value} = this.selectNumber
    let count = this.props.count
    if(count%2===1){
      this.props.increment(value*1)
    }
  }
  incrementAsync = ()=>{
    let {value} = this.selectNumber
    this.props.incrementAsync(value*1,1000)
  }
  render(){
    let count = this.props.count
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
