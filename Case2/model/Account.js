"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(userName, password) {
        this._userName = userName;
        this._password = password;
    }
    Object.defineProperty(Account.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "password", {
        get: function () {
            return this._password;
        },
        set: function (value) {
            this._password = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
