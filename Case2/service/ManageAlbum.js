"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageAlbum = void 0;
var ManageAlbum = /** @class */ (function () {
    function ManageAlbum() {
        this.quantityOfAlbum = 0;
        this.listAlbum = [];
    }
    ManageAlbum.prototype.create = function (t) {
        this.listAlbum.push(t);
        this.quantityOfAlbum++;
    };
    ManageAlbum.prototype.deleteByIndex = function (index) {
        return this.listAlbum.splice(index - 1, 1);
    };
    ManageAlbum.prototype.findByIndex = function (index) {
        return this.listAlbum[index];
    };
    ManageAlbum.prototype.findByName = function (name) {
        console.log(this.listAlbum.filter(function (item) { return item.nameAlbum.includes(name); }));
    };
    ManageAlbum.prototype.read = function () {
        for (var i = 0; i < this.listAlbum.length; i++) {
            console.log(this.listAlbum[i]);
            for (var j = 0; j < this.listAlbum[i].listMusic.length; j++) {
                console.log(this.listAlbum[i].listMusic[j]);
            }
        }
        return this.listAlbum;
    };
    ManageAlbum.prototype.update = function (index, t) {
        return this.listAlbum[index] = t;
    };
    ManageAlbum.prototype.findById = function (id) {
        for (var i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].idAlbum == id) {
                console.log(this.listAlbum[i]);
                return this.listAlbum[i];
            }
        }
        return null;
    };
    return ManageAlbum;
}());
exports.ManageAlbum = ManageAlbum;
// let manage: ManageAlbum = new ManageAlbum();
//
// let Album1: ListMusic = new ListMusic('Chill', 11);
// let Album2: ListMusic = new ListMusic('remix', 22);
// let Album3: ListMusic = new ListMusic('Pop', 33);
//
// let music1: Music = new Music('asa', '11', 1);
// let music2: Music = new Music('asa', '11', 2);
// let music3: Music = new Music('asa', '11', 3);
// let music4: Music = new Music('asa', '11', 4);
// let music5: Music = new Music('asa', '11', 5);
// let music6: Music = new Music('asa', '11', 6);
//
// Album1.create(music1);
// Album1.create(music2);
// Album2.create(music3);
// Album2.create(music4);
// Album3.create(music5);
// Album3.create(music6);
// manage.create(Album1);
// manage.create(Album2);
// manage.create(Album3);
// // manage.findByName('Pop');
// manage.findSongById(33)
