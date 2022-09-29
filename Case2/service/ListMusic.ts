import {Manager} from "./Manager";
import {Music} from "../model/Music";

export class ListMusic implements Manager<Music> {
    _idAlbum: number
    listMusic: Music[] = [];
    quantityOfMusic: number = 0;
    nameAlbum: string;

    constructor(idAlbum: number, nameAlbum: string) {
        this.nameAlbum = nameAlbum
        this._idAlbum = idAlbum
    }

    create(t: Music) {
        this.listMusic.push(t);
        this.quantityOfMusic++;
    }

    deleteByIndex(index: number) {
        return this.listMusic.splice(index - 1, 1)
    }

    findByIndex(index: number): Music {
        return this.listMusic[index - 1]
    }


    findByName(name: string) {
        return this.listMusic.filter(item => item.nameOfMusic.includes(name))
    }

    read() {
        for (let i = 0; i < this.listMusic.length; i++) {
            console.log(this.listMusic[i])
        }
        return this.listMusic
    }

    update(index: number, t: Music) {
        this.listMusic[index - 1] = t
    }

    findById(id: number) {
        for (let i = 0; i < this.listMusic.length; i++) {
            if (this.listMusic[i].iD == id) {
                console.log(this.listMusic[i])
                return this.listMusic[i]
            }
        }
        return null
    }

    get idAlbum(): number {
        return this._idAlbum;
    }

    set idAlbum(value: number) {
        this._idAlbum = value;
    }

}