import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index'

import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      taskSearch: ''.toLowerCase(),
      sortBy : 'name',
      sortValue : 1
    }
  }

  onSearch = (keyword) => {
    this.setState({
      taskSearch: keyword
    });
  }

  onClickSort =  async (name,value) => {
      await this.setState({
        sortBy: name,
        sortValue: value
      });
  } 

  onToggleForm = () => {
      if(this.props.editTask) {
        this.props.editTask({
          id : '',
          name : '',
          status:false
        });
        this.props.openForm();
      } else {
        this.props.onToggleForm();
      }
      
  }

  render() {
    var { 
        sortBy,
        sortValue } = this.state;

    var { isDisplayForm } = this.props;
   

  //  
  //  if (sortBy === 'name') {
  //    taskState.sort((a,b) => {
  //     if (a.name > b.name) return sortValue; //1
  //     else if (a.name < b.name ) return -sortValue; //-1
  //     return 0;
  //     });
  //  }
  //  else{
  //   taskState.sort((a,b) => {
  //     if (a.status > b.status) return -sortValue;
  //     else if (a.status < b.status ) return sortValue;
  //     return 0;
  //     });
  //  }

    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
          <TaskForm />
          </div>
          <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button
              onClick={this.onToggleForm}
              type="button"
              className="btn btn-primary mr-5">
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                </button>
            <Control
              onClickSort={this.onClickSort}
              onSearch={this.onSearch}
              sortBy = {sortBy}
              sortValue={sortValue} />
            <TaskList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      isDisplayForm : state.isDisplayForm
    };
}


const mapDispatchToProps = (dispatch,props) => {
  return{
      onToggleForm : () => {
        dispatch(actions.toggleForm());
      },
      openForm : () => {
        dispatch(actions.openForm());
      },
      editTask : (task) => {
        dispatch(actions.editTask(task));
    }
  };
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
