import { combineReducers } from 'redux';
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import  editTask  from './editTask';
import filterTask from './filterTask'
import  searchTask  from './searchTask';
import  sortTask  from './sortTask';
const myReducer = combineReducers({
    tasks : tasks,
    isDisplayForm : isDisplayForm,
    editTask : editTask,
    filterTask : filterTask,
    searchTask : searchTask,
    sortTask : sortTask
});

export default myReducer
