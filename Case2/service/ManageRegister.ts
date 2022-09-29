//Sign up
import {Account} from "../model/Account";

export class ManageRegister {
    listAccount: Account[] = [];

    signUp(users: Account) {
        this.listAccount.push(users)
    }

    signIn(usersName: string, passWords: string): boolean {
        for (let i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].userName == usersName && this.listAccount[i].password == passWords) {
                return true
            }
        }
        return false;
    }

}