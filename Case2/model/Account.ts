export class Account {
    private _userName:string;
    private _password:string;
    constructor(UserName: string, Password: string) {
        this._userName = UserName;
        this._password = Password;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }


}