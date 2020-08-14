import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index';
class TaskItem extends Component {

    // Trả về ID cho TaskList -> App sau khi click vào span
    onUpdateStatusTaskItem = () => {
        this.props.updateStatus(this.props.task.id);
    }

    onDelete = () => {
        let check = window.confirm("Are you sure delete this item ?");
        if (check) {
            this.props.deleteTask(this.props.task.id);
            this.props.editTask({
            id : '',
            name : '',
            status : false
        });
        }
        else{
            return;
        }
        
    }

    onUpdate = () => {
        this.props.onOpenForm();
        this.props.editTask(this.props.task);
    }
    render() {
       var {task,index} = this.props;
        return (
            <tr >
                <td>{index +1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                    className={task.status === true ? 'label label-success cursor' : 'label label-danger cursor'}
                    onClick = {this.onUpdateStatusTaskItem}>
                    {task.status === true ? 'Đã hoàn thành' : 'Chưa hoàn thành'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                    type="button" 
                    className="btn btn-warning"
                    onClick={this.onUpdate}>
                        <span className="fa fa-pencil mr-5"></span>Edit
                    </button>&nbsp;
                    <button
                    onClick = {this.onDelete} 
                    type="button" className="btn btn-danger">
                        <span 
                        className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
        );
    }
}
const mapStateToProps = (state) => {
    return {
    };
}

const mapDispatchToProps = (dispatch,props) =>{
    return {
        updateStatus : (id) => {
            dispatch(actions.updateStatus(id))
        },
        deleteTask : (id) => {
            dispatch(actions.deleteTask(id));
        },
        editTask : (task) => {
            dispatch(actions.editTask(task));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        },
        onOpenForm : () => {
            dispatch(actions.openForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskItem);
