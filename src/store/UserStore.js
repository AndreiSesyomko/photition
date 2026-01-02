import {makeAutoObservable} from "mobx";

export default class UserStore
{
    constructor()
    {
        this._isAuth = true;
        this._isStaff = true;
        this._user = {id: 6, username: 'User', avatar: null, email: "asdas@sdas.as", registerAt: '2025-10-09'};
        makeAutoObservable(this);
    }

    setIsAuth(bool)
    {
        this._isAuth = bool;
    }

    setIsStaff(bool)
    {
        this._isStaff = bool;
    }

    setUser(user)
    {
        this._user = user;
    }

    get isAuth()
    {
        return this._isAuth;
    }

    get user()
    {
        return this._user;
    }

    get isStaff()
    {
        return this._isStaff;
    }
}