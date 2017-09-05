import React from 'react';
import ReactDOM from 'react-dom';

import Main from 'components/Main.jsx';
import Hello from 'components/Hello.jsx';
import Component from 'components/Component.jsx';


window.onload = function () {
 
class Counter extends React.Component { //元件的部分
    constructor(props) {
      super(props);
      this.state = { //這裡用state是因為這個值會持續改變
        count: 5
      };
    }
// lifecycle methods 定義元件生命週期的方法(官方預設)
 componentDidMount() { //當Counter創建的物件顯示完後 內容會被call 1次(倒數開始)
   this.countdownId = setInterval(() => {
     this.setState({ // triggers re-rendering 重新觸發渲染
       count: this.state.count - 1
     }); // obj merged to this.state 覆蓋count的值
   }, 1000);
 }
     render() {
       return <h2> Countdown: {
         this.state.count
      } </h2>;
    }
 componentWillUnmount() { //當Counter產生的物件被移除後 內容會被call 1次(倒數結束)
   clearInterval(this.countdownId);
 }
}

ReactDOM.render(
    (
    <div>
        <Counter />
        <Counter />
        <Counter />
    </div>
    )
, document.getElementById('root'));
}