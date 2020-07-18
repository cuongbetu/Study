import React, { Component } from 'react';

class TaskForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            status: false
        }
    }

    // Do du lieu cho form them cong viec, kiem tra ton tai truoc khi setState
    componentDidMount() {
        if (this.props.taskEditing) {
            this.setState({
                id: this.props.taskEditing.id,
                name: this.props.taskEditing.name,
                status: this.props.taskEditing.status
            });
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps && nextProps.taskEditing) {
            this.setState({
                id: nextProps.taskEditing.id,
                name: nextProps.taskEditing.name,
                status: nextProps.taskEditing.status
            });
        }
        else if (!nextProps.taskEditing) {
            this.setState({
                id: '',
                name: '',
                status: false
            });
        }

    }


    onHideForm = () => {
        this.props.onCloseForm();
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
        this.props.onSubmit(this.state);
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
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.taskEditing ? "Chỉnh sửa công việc" : "Thêm công việc"}
                        <span onClick={this.onHideForm} className="fa fa-times-circle text-right"></span>
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
                            <button type="submit" className="btn btn-warning">{this.props.taskEditing ? 'Sửa' : 'Thêm'}</button>&nbsp;
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

export default TaskForm;
