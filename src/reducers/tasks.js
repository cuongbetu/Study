import * as types from '../constant/ActionTypes';

    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    const randomID = () => {
        return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-'
            + s4() + '-' + s4();
    }

    
  const findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }

var data = localStorage.getItem('tasks');
var initialState = data ? JSON.parse(data) : [];

var myReducer = (state = initialState,action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.SAVE_TASK:
            if (!action.task.id) {
                let newTask = { 
                    id : randomID(),
                    name : action.task.name,
                    status : action.task.status 
                };
                if(!action.task.name)
                    return [...state]
                else
                state.push(newTask);
            }
            else{
                let index = findIndex(state,action.task.id);
                state.splice(index,1,action.task);
            }
            
            localStorage.setItem('tasks',JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS:
                // var index = this.findIndex(id);
                let id = action.id;
                let index = findIndex(state,id);
                state[index] = {
                    ...state[index],
                    status : !state[index].status
                }

                // Cách tự nghĩ.
                // let cloneTask = {...state[index]};
                // cloneTask.status = !cloneTask.status;
                // state.splice(index,1,cloneTask);
                localStorage.setItem('tasks',JSON.stringify(state))
                return [...state]
        case types.DELETE_TASK:
            let idDelete = action.id;
            let indexDelete = findIndex(state,idDelete);
            state.splice(indexDelete,1);
            localStorage.setItem('tasks',JSON.stringify(state))
            return [...state]
        default:
            return [...state];
    }
};

export default myReducer