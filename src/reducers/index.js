import { combineReducers } from 'redux';
import tasks from './tasks'
import isDisplayForm from './isDisplayForm'
import  editTask  from './editTask';
import filterTask from './filterTask'
const myReducer = combineReducers({
    tasks : tasks,
    isDisplayForm : isDisplayForm,
    editTask : editTask,
    filterTask : filterTask
});

export default myReducer
