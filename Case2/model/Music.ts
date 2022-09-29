export class Music {
    private _nameOfMusic: string;
    private _singer: string;
    private _iD: number;


    constructor(NameOfMusic: string, Singer: string, ID: number) {
        this._nameOfMusic = NameOfMusic;
        this._singer = Singer;
        this._iD = ID;
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
