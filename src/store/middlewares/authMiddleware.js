import {browserHistory} from 'react-router';
import Action from '../actions';

export default class AuthMiddleware{
    static login(id, password){
        return (dispatch) => {
            if(password === "222"){
                if(id === "786"){
                    browserHistory.push('/adminpanel');
                }
                else if(id === "678"){
                    browserHistory.push('/managerpanel');
                }
                else {
                    alert("wrong id ");
                }
            }
            else{
                alert("password is wrong");
            }
            dispatch(Action.login(id, password));
        }
    }
}