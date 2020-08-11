import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import { filter } from 'lodash';
class TaskList extends Component {
    constructor(){
        super()
        this.state = {
            filterName : '',
            filterStatus : -1 // Tất cả : -1, Active : 1, Ẩn : 0.
        }
    }

    onChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        let filter = {
            name : name === 'filterName' ? value : this.state.filterName,
            status : name === 'filterStatus' ? value : this.state.filterStatus
        }
        this.props.onFilter(
            filter
        )
        this.setState({
            [name]  : value
        });
    }


    render() {
        var {taskList,filterValue} = this.props;
        var {filterName,filterStatus} = this.state;
        if (filterValue.name) {
            taskList = taskList.filter(task => {
                return task.name.toLowerCase().indexOf(filterValue.name) !== -1;
              });
        }

        taskList = taskList.filter(task => {
            if (filterValue.status === -1) {
                return task
            }else{
                return task.status === ( filterValue.status === 1 ? true : false );
            }
          });
        
        var elm = taskList.map((task,index)=>{
            return <TaskItem index={index} 
                            key={index} 
                            task={task}
                            />
        });
        return (
            <div className="row mt-15">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <table className="table table-bordered table-hover mt-5">
                        <thead>
                            <tr>
                                <th className="text-center">STT</th>
                                <th className="text-center">Tên</th>
                                <th className="text-center">Trạng Thái</th>
                                <th className="text-center">Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td>
                                    <input type="text" 
                                    className="form-control"
                                    name = "filterName"
                                    value = {filterName}
                                    onChange = {this.onChange} />
                                </td>
                                <td>
                                    <select 
                                    className="form-control"
                                    name = "filterStatus"
                                    value = { filterStatus }
                                    onChange = {this.onChange}>
                                        <option value={-1}>Tất Cả</option>
                                        <option value={0}>Chưa hoàn thành</option>
                                        <option value={1}>Đã hoàn thành</option>
                                    </select>
                                </td>
                                <td></td>
                            </tr>
                            {elm}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

//Lấy state từ store
const mapStateToProps = (state) => {
    return {
        taskList : state.tasks,
        filterValue : state.filterTask
    }
};

const mapDispatchToProps = (dispatch,props) => {
    return {
        onFilter : (filterValue) => {
            dispatch(actions.filterTask(filterValue));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskList);
