import React, { Component } from 'react';


 class Result extends Component {
    showColor2 = () => {
        return {
            color : this.props.color,
            fontSize : this.props.fontSize
        }
    }
     render(){
        return (
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="panel panel-default">
                            <div className="panel-heading">
                            <h3 className="panel-title">Color : { this.props.color} , Font-size : { this.props.fontSize }</h3>
                            </div>
                            <div className="panel-body">
                            <div className="form-group">
                                <h2 style = { this.showColor2() } id="content">Avc</h2>
                            </div>
                            </div>
                    </div>
                </div> 
        )
     }
}

export default Result;
