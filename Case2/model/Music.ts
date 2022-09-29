export class Music {
    _nameOfMusic: string;
     _singer: string;
     _iD: number;


    constructor(nameOfMusic: string, singer: string, iD: number) {
        this._nameOfMusic = nameOfMusic;
        this._singer = singer;
        this._iD = iD;
    }

    get nameOfMusic(): string {
        return this._nameOfMusic;
    }

    set nameOfMusic(value: string) {
        this._nameOfMusic = value;
    }

    get singer(): string {
        return this._singer;
    }

    set singer(value: string) {
        this._singer = value;
    }

    get iD(): number {
        return this._iD;
    }

    set iD(value: number) {
        this._iD = value;
    }
}
