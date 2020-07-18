import React, { Component } from 'react';

class Sort extends Component {


    onClickSort = (name, value) => {
        this.props.onClickSort(name, value);
    }
    render() {
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle"
                        type="button"
                        id="dropdownMenu1"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="true">
                        Sắp Xếp <span className="fa fa-caret-square-o-down ml-5"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li onClick={() => this.onClickSort('name', 1)} 
                        className={this.props.sortBy === 'name' && this.props.sortValue === 1 ? 'sort_selected' : '' }>
                            <button >
                                <span className="fa fa-sort-alpha-asc pr-5">
                                    Tên A-Z
                                </span>
                            </button>
                        </li>
                        <li onClick={() => this.onClickSort('name', -1)} 
                        className={this.props.sortBy === 'name' && this.props.sortValue === -1 ? 'sort_selected' : '' } >
                            <button >
                                <span className="fa fa-sort-alpha-desc pr-5">
                                    Tên Z-A
                                </span>
                            </button>
                        </li>
                        <li role="separator" className="divider"></li>
                        <li onClick={() => this.onClickSort('status', 1)}
                        className={this.props.sortBy === 'status' && this.props.sortValue === 1 ? 'sort_selected' : '' } >
                        <button >Đã hoàn thành</button>
                        </li>
                        <li onClick={() => this.onClickSort('status', -1)} 
                        className={this.props.sortBy === 'status' && this.props.sortValue === -1 ? 'sort_selected' : '' } >
                        <button >Chưa hoàn thành</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sort;
