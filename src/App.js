import React, { Component } from 'react';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import './App.css';
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      color : 'red',
      fontSize : 16,
    }
  };

  onSetColor = (params) =>{
    this.setState({
      color : params
    });
  }

  onSetFontSize = (params) => {
    if (this.state.fontSize + params >= 16 && this.state.fontSize + params <= 50) {
      this.setState({
         fontSize : this.state.fontSize +  params
      });
    }
  }

  onReset = (value) =>{
    if (value) {
      this.setState({
        color : 'red',
        fontSize : 16
      });
    }
  }

  render(){
    return (
      <div className="container mt-50">
        <div className="row">
          <ColorPicker color = { this.state.color } onReceiveColor = { this.onSetColor }></ColorPicker>
          <SizeSetting fontSize= {this.state.fontSize} onReceiveFontSize = { this.onSetFontSize } ></SizeSetting>
        </div>
        <div className="row">
            <Result color={this.state.color} fontSize = {this.state.fontSize}></Result>
            <Reset onReceiveReset = {this.onReset }></Reset>
          </div> 
        </div>
    );
  }
  
}

export default App;
