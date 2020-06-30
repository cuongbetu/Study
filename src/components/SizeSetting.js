import React, { Component } from 'react';


class SizeSetting extends Component {

    changeFontSize = (value) => {
        this.props.onReceiveFontSize(value);
    }

   
    render(){
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">Font-size : {this.props.fontSize} </h3>
                </div>
                <div className="panel-body">
                        <button className="btn btn-info" onClick= {() => this.changeFontSize(2)} >Tăng</button>&nbsp;
                        <button className="btn btn-info" onClick= { () => this.changeFontSize(-2)} >Giảm</button>
                </div>
                </div>
           </div>   
        )
    }
}

export default SizeSetting;
