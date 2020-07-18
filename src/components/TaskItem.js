import React, { Component } from 'react';

class TaskItem extends Component {

    // Trả về ID cho TaskList -> App sau khi click vào span
    onUpdateStatusTaskItem = () => {
        this.props.onUpdateStatusTaskList(this.props.task.id);
    }

    onDelete = () => {
        this.props.onDelete(this.props.task.id);
    }

    onUpdate = () => {
        this.props.onUpdate(this.props.task.id);
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
                        <span className="fa fa-pencil mr-5"></span>Sửa
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

export default TaskItem;
