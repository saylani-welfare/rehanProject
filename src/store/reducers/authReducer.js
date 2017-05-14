import Action from '../actions';

const initialState = {
    id: null,
    password: null,
    isLogin: false
}

function Auth(state = initialState, action){
    const {id, password} = action;
    switch(action.type){
        case Action.LOGIN:
        return Object.assign({}, state, {id, password, isLogin: true});
        default:
        return state;
    }
}

export default Auth