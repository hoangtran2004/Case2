"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMusic = void 0;
var ListMusic = /** @class */ (function () {
    function ListMusic(idAlbum, nameAlbum) {
        this.listMusic = [];
        this.quantityOfMusic = 0;
        this.nameAlbum = nameAlbum;
        this._idAlbum = idAlbum;
    }
    ListMusic.prototype.create = function (t) {
        this.listMusic.push(t);
        this.quantityOfMusic++;
    };
    ListMusic.prototype.deleteByIndex = function (index) {
        return this.listMusic.splice(index - 1, 1);
    };
    ListMusic.prototype.findByIndex = function (index) {
        return this.listMusic[index - 1];
    };
    ListMusic.prototype.findByName = function (name) {
        console.log(this.listMusic.filter(function (item) { return item.nameOfMusic.includes(name); }));
    };
    ListMusic.prototype.read = function () {
        for (var i = 0; i < this.listMusic.length; i++) {
            console.log(this.listMusic[i]);
        }
        return this.listMusic;
    };
    ListMusic.prototype.update = function (index, t) {
        this.listMusic[index - 1] = t;
    };
    ListMusic.prototype.findById = function (id) {
        for (var i = 0; i < this.listMusic.length; i++) {
            if (this.listMusic[i].iD == id) {
                console.log(this.listMusic[i]);
                return this.listMusic[i];
            }
        }
        return null;
    };
    Object.defineProperty(ListMusic.prototype, "idAlbum", {
        get: function () {
            return this._idAlbum;
        },
        set: function (value) {
            this._idAlbum = value;
        },
        enumerable: false,
        configurable: true
    });
    return ListMusic;
}());
exports.ListMusic = ListMusic;
