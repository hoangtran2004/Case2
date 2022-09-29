import {Manager} from "./Manager";
import {ListMusic} from "./ListMusic";
import {Music} from "../model/Music";

export class ManageAlbum implements Manager<ListMusic> {
    quantityOfAlbum: number = 0;
    listAlbum: ListMusic[] = [];

    create(t: ListMusic) {
        this.listAlbum.push(t);
        this.quantityOfAlbum++
    }

    deleteByIndex(index: number) {
        return this.listAlbum.splice(index - 1, 1)
    }

    findByIndex(index: number): ListMusic {
        return this.listAlbum[index];
    }

    findByName(name: string) {
        console.log(this.listAlbum.filter(item => item.nameAlbum.includes(name)))
    }

    read() {
        for (let i = 0; i < this.listAlbum.length; i++) {
            console.log(this.listAlbum[i])
            for (let j = 0; j < this.listAlbum[i].listMusic.length;j++) {
                console.log(this.listAlbum[i].listMusic[j])
            }
        }
        return this.listAlbum
    }

    update(index: number, t: ListMusic) {
        return this.listAlbum[index] = t
    }
    findById(id: number) {
        for (let i = 0; i < this.listAlbum.length; i++) {
            if (this.listAlbum[i].idAlbum == id) {
                console.log(this.listAlbum[i])
                return this.listAlbum[i]
            }
        }
        return null;
    }

}


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