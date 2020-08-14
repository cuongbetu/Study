import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions/index';
class TaskForm extends Component {
    constructor() {
        super()
        this.state = {
            id : '',
            name: '',
            status: false
        }
    }

    // Do du lieu cho form them cong viec, kiem tra ton tai truoc khi setState
    componentDidMount() {
        if(this.props.editTask) {
            this.setState({
                id: this.props.editTask.id,
                name: this.props.editTask.name,
                status: this.props.editTask.status
            })
        }
        else{
            this.onClear();
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.editTask) {
            this.setState({
                id: nextProps.editTask.id,
                name: nextProps.editTask.name,
                status: nextProps.editTask.status
            });
        }
        else if (!nextProps.editTask) {
            this.onClear();
        }

    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.saveTask(this.state);
        this.onClear();
        // this.onHideForm();
    }

    onClear = () => {
        this.setState({
            name: '',
            status: false
        });
    }
    render() {
        console.log(this.props.editTask);
        const { onCloseForm,isDisplayForm } = this.props;
        if (!isDisplayForm) return '';
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.state.id ? "Chỉnh sửa công việc" : "Thêm công việc"}
                        <span onClick={onCloseForm} className="fa fa-times-circle text-right"></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên công việc :</label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                className="form-control" />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            name="status"
                            onChange={this.onChange}
                            value={this.state.status}
                            className="form-control" required="required">
                            <option value={true}>Đã hoàn thành</option>
                            <option value={false}>Chưa hoàn thành</option>
                        </select>

                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">{this.state.id ? 'Edit' : 'Thêm'}</button>&nbsp;
                            <button
                                onClick={this.onClear}
                                type="reset"
                                className="btn btn-danger">Hủy Bỏ</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isDisplayForm : state.isDisplayForm,
        editTask : state.editTask
    }
};

const mapDispatchToProps = (dispatch,props) =>{
    return {
        saveTask: (task) => {
            dispatch(actions.saveTask(task));
        },
        onCloseForm : () => {
            dispatch(actions.closeForm());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TaskForm);
