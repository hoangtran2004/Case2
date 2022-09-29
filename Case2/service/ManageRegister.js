"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageRegister = void 0;
var ManageRegister = /** @class */ (function () {
    function ManageRegister() {
        this.listAccount = [];
    }
    ManageRegister.prototype.signUp = function (users) {
        this.listAccount.push(users);
    };
    ManageRegister.prototype.signIn = function (usersName, passWords) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].userName == usersName && this.listAccount[i].password == passWords) {
                return true;
            }
        }
        return false;
    };
    return ManageRegister;
}());
exports.ManageRegister = ManageRegister;
