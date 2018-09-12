import { getStore } from '../shared/redux/store';
// import * as actions from '../components/login/redux/actions'

class Auth {

    constructor() {
        this._isAuthenticated = false;

        setTimeout(() => {
            this.store = getStore();

            this.login = this.store.getState().login;
        });
    }


    attempt(data) {
        return data;
    }

    isAuthenticated() {
        this._isAuthenticated=this.login.data ? this.login.data : false

        return this._isAuthenticated;
    }

    setData(data) {
        // this.store.dispatch(actions.set(data));
        this.login = {data:data};
    }

}

const auth = new Auth();

export default auth;