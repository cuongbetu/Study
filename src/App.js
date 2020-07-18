import React, { Component } from 'react';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { findIndex,filter } from 'lodash';
import './App.css';
class App extends Component {
  constructor() {
    super()
    this.state = {
      taskState: [],
      isDisplayForm: false,
      taskEditing: null,
      filterState: {
        name: ''.toLowerCase(),
        status: -1
      },
      taskSearch: ''.toLowerCase(),
      sortBy : 'name',
      sortValue : 1
    }
  }

  // onGenerateData = () => {
  //   var tasks = [
  //     {
  //       id : this.generateID(),
  //       name : 'Hoc lap trinh Net Core',
  //       status : true
  //     },
  //     {
  //       id : this.generateID(),
  //       name : 'Hoc lap trinh ReactJS',
  //       status : true
  //     },
  //     {
  //       id : this.generateID(),
  //       name : 'Hoc lap trinh Angular',
  //       status : false
  //     }
  //   ];
  //   this.setState({
  //     taskState : tasks
  //   });

  //   localStorage.setItem('tasks',JSON.stringify(tasks));
  // }

  // Get dữ liệu từ localStorage
  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        taskState: tasks
      });
    }
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-'
      + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      })
    }
    else
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      })
  }


  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    })
  }


  onUpdateStatus = (id) => {
    var { taskState } = this.state;
    // var index = this.findIndex(id);
    var index = findIndex(taskState, (f) => {
      return f.id === id;
    });
    if (index !== -1) {
      taskState[index].status = !taskState[index].status;
      this.setState({
        taskState: taskState
      });
      localStorage.setItem('tasks', JSON.stringify(taskState));
    }
  }

  // Do du lieu vao form them cong viec
  onUpdate = (id) => {
    var { taskState } = this.state;
    var index = this.findIndex(id);
    var taskEditing = taskState[index];
    this.setState({
      taskEditing: taskEditing
    });
    this.onShowForm();

  }

  // Tim du lieu phu hop roi thay the
  onSubmit = (data) => {
    // Clone value từ State
    var { taskState } = this.state;
    if (data.id) {
      var index = this.findIndex(data.id);
      taskState.splice(index, 1, data);
    }
    else {
      data.id = this.generateID();
      taskState.push(data);
    }
    this.setState({
      taskState: taskState
    });
    localStorage.setItem('tasks', JSON.stringify(taskState));
  }

  onDelete = (id) => {
    var { taskState } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      taskState.splice(index, 1);
      this.setState({
        taskState: taskState
      });
    }
    localStorage.setItem('tasks', JSON.stringify(taskState));
    this.onCloseForm();
  }



  findIndex = (id) => {
    var { taskState } = this.state;
    var result = -1;
    taskState.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filterState: {
        name: filterName,
        status: filterStatus
      }
    });
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

  render() {
    var { taskState, isDisplayForm,
        taskEditing, filterState,
        taskSearch,sortBy,
        sortValue } = this.state;
        // taskState = taskState.filter(task => {
        //   return task.name.toLowerCase().indexOf(filter.name) !== -1;
        // });
        taskState = filter(taskState,(f) => {
          return f.name.toLowerCase().indexOf(filterState.name.toLowerCase()) !== -1;
        });
      // if (filter.status) { // Viết ntn sẽ tự động kiểm tra != 0, != null, != undefine 

      // }
     


    if (taskSearch) {
      taskState = filter(task => {
        return task.name.toLowerCase().indexOf(taskSearch) !== -1;
      });
    }

   if (sortBy === 'name') {
     taskState.sort((a,b) => {
      if (a.name > b.name) return sortValue; //1
      else if (a.name < b.name ) return -sortValue; //-1
      return 0;
      });
   }
   else{
    taskState.sort((a,b) => {
      if (a.status > b.status) return -sortValue;
      else if (a.status < b.status ) return sortValue;
      return 0;
      });
   }

    var elmTaskForm = isDisplayForm === true ? <TaskForm
      onSubmit={this.onSubmit}
      onCloseForm={this.onCloseForm}
      taskEditing={taskEditing} /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {elmTaskForm}
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
            <TaskList tasks={taskState}
              onDelete={this.onDelete}
              onUpdateStatusApp={this.onUpdateStatus}
              onUpdate={this.onUpdate}
              onFilter={this.onFilter}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
