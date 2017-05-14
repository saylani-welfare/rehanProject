export default class Action {
    static LOGIN = "LOGIN";

    static login(id, password){
        return {
            type: Action.LOGIN,
            id, 
            password
        }
    }
}