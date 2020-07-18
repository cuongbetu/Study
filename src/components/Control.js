import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort'

class Control extends Component {

    render() {
        let {onSearch,onClickSort,sortBy,sortValue} = this.props;
        return (
            <div className="row mt-15">
                <Search onSearch = { onSearch } />
                <Sort onClickSort = {onClickSort}
                sortBy = {sortBy}
                sortValue={sortValue} />
            </div>
        );
    }
}

export default Control;
