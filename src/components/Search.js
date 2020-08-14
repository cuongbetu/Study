import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import  '../App.css'


class Search extends Component {
    constructor(props){
        super()
        this.state = {
            keyWord : ''
        }
    }

    onChange = (event) => {
       
        this.setState({
            keyWord : event.target.value
        })
    } 

    onSearch = ()=>{
        this.props.onSearch(this.state.keyWord);
    }

    onClear = () => {
        this.setState({
            keyWord : ''
        })
    }


    render() {
    
        return (
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="input-group">
                        <input 
                        type="text"
                        className="form-control" 
                        placeholder="Nhập từ khóa..."
                        name="searchValue"
                        value = {this.state.keyWord}
                        onChange = {this.onChange} />
                        <span className= "input-group-btn">
                            <button className="btn btn-primary" 
                            type="button"
                            onClick={this.onSearch}>
                                <span className="fa fa-search "></span>Tìm
                            </button>
                        </span>
                        <span className="input-group-btn">
                            <button className="btn btn-primary" 
                            type="button"
                            onClick={this.onClear}>
                                <span></span>Xóa
                            </button>
                        </span>
                    </div>
                </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch,props) => {
    return{
        onSearch : (keyword) => {
          dispatch(actions.searchTask(keyword));
      }
    };
  }
  export default connect(mapStateToProps,mapDispatchToProps)(Search);
