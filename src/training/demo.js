import { createStore } from 'redux'
import {toggleStatus,toggleSort,addUser} from './actions/CreateAction'
import reducer from './reducers/ReducerAndState'




const store = createStore(reducer);

store.dispatch(toggleStatus());
console.log("Toggle Status :",store.getState());
store.dispatch(toggleSort({
        sortBy : 'stt',
        value : -1
}));
console.log("Toggle Sort :",store.getState());
store.dispatch(addUser(
    [{
        name : 'Nguyen Van A',
        password : 0
    }
    ,{
        name : 'Nguyen Van B',
        password : 2
    }
    ,{
        name :'Nguyen Van C',
        password : 5
    }
    ,{
        name :'Nguyen Van D',
        password : 6
    }
    ,{
        name :'Nguyen Van E',
        password : 3
    }]
));
console.log("Add User",store.getState());   