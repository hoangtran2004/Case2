"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
var Music = /** @class */ (function () {
    function Music(nameOfMusic, singer, iD) {
        this._nameOfMusic = nameOfMusic;
        this._singer = singer;
        this._iD = iD;
    }
    Object.defineProperty(Music.prototype, "nameOfMusic", {
        get: function () {
            return this._nameOfMusic;
        },
        set: function (value) {
            this._nameOfMusic = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "singer", {
        get: function () {
            return this._singer;
        },
        set: function (value) {
            this._singer = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Music.prototype, "iD", {
        get: function () {
            return this._iD;
        },
        set: function (value) {
            this._iD = value;
        },
        enumerable: false,
        configurable: true
    });
    return Music;
}());
exports.Music = Music;
