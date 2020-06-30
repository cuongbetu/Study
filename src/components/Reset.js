import React, { Component } from 'react';



class Reset extends Component {
    onResetAll = () => {
        this.props.onReceiveReset(true);
    }
    
    render(){
        return (
            <button type="button" onClick={this.onResetAll} className="btn btn-primary">Reset</button>   
        )
    }
}

export default Reset;
