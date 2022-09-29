import {Music} from "../model/Music";
import {Account} from "../model/Account";
import {ListMusic} from "../service/ListMusic";
import {ManageAlbum} from "../service/ManageAlbum";
import {ManageRegister} from "../service/ManageRegister";

let input = require('readline-sync');
let manageRegister: ManageRegister = new ManageRegister();
let manageAlbum: ManageAlbum = new ManageAlbum();
let manageMusic: ListMusic = new ListMusic(0, '0')

function menuSignUp() {
    let choice: number;
    let menu = `
    -----Welcome,do you have account ?-----
    1.I have account .
    2.I don't have account.`
    console.log(menu)
    choice = +input.question('Enter your selection : ')
    switch (choice) {
        case 1:
            menuLogin();
            break;
        case 2:
            signUp();
            break;
    }
}

function menuLogin() {
    let choice: number;
    do {
        let menu = `
    1.Login.
    0.Out.`
        console.log(menu)
        choice = +input.question('Enter your selection : ')
        switch (choice) {
            case 1:
                inputInfo();
                break;
            case 0:
                menuSignUp();
                break;
        }
    } while (choice != 0)
}

function signUp() {
    let choice: number;
    do {
        let menu = `
    1.Sign up.
    0.Out.`
        console.log(menu)
        choice = +input.question('Enter your selection : ')
        switch (choice) {
            case 1:
                registerAccount();
                break;
            case 0:
                menuSignUp();
        }
    } while (choice != 0)
}

function registerAccount() {
    let userName = input.question('Enter your name account : ');
    let password = input.question('Enter your password : ');
    let account: Account = new Account(userName, password);
    if (account.userName == '') {
        if (account.password == '') {
            console.log('User name and password cannot be blank !!!')
        }
    } else manageRegister.signUp(account);
    menuSignUp();
}

function inputInfo() {
    let userNameLogin = "";
    let passwordLogin = "";
    do {
        userNameLogin = input.question('Enter your name login : ');
        passwordLogin = input.question('Enter password login : ');
        manageRegister.signIn(userNameLogin, passwordLogin);
        if (manageRegister.signIn(userNameLogin, passwordLogin) == true) {
            mainMenu();
        } else if (userNameLogin == '') {
            if (passwordLogin == '') {
                console.log('User name and password cannot be blank !!!')
            }
        } else console.log('Account name or password incorrect !!!')

        menuLogin();
    } while (!manageRegister.signIn(userNameLogin, passwordLogin));
}

function listMusic() {
    let choice: number;
    do {
        let menu = `
         1.Add new music.
         2.Find music by name.
         3.Find music by index.
         4.Update new music.
         5.List music.
         6.Delete music.
         7.Add music in album.
         0.Main menu.`
        console.log(menu);
        choice = +input.question('Enter your selection : ')
        switch (choice) {
            case 1:
                addMusic();
                break;
            case 2:
                findNameMusic();
                break;
            case 3:
                findIndexMusic();
                break;
            case 4:
                updateMusic();
                break;
            case 5:
                showListMusic();
                break;
            case 6:
                deleteMusic();
                break;
            case 7:
                addMusicInAlbum();
                break;
            case 0:
                mainMenu();
                break;
        }
    } while (choice != 0)

}

function mainMenu() {
    let choice: number;
    do {
        let menu = `
        -----Login success-----
    1.Music.
    2.Albums.
    3.List album.
    0.Log out.`
        console.log(menu)
        choice = +input.question('Enter your selection : ')
        switch (choice) {
            case 1:
                listMusic();
                break;
            case 2:
                myAlbums();
                break;
            case 3:
                listAlbum();
                break;
            case 0:
                menuSignUp();
                break;
        }
    } while (choice != 0)
}

function addMusic() {
    let nameMusic = input.question('Enter name song : ')
    let singer = input.question('Enter name singer  : ');
    let id = +input.question('Enter id of song : ')
    let music = new Music(nameMusic, singer, id);
    if (music.nameOfMusic == '') {
        if (music.singer == '') {
            console.log('Name music and singer cannot be blank !!! ')
        }
    } else manageMusic.create(music);
    listMusic()
}

function findNameMusic() {
    let name = input.question('Enter name song you want to find :')
    if (!name) {
        console.log('Not found !!!')
    } else {
        manageMusic.findByName(name)
    }

}

function findIndexMusic() {
    let index = +input.question('Enter song number : ')
    console.log(manageMusic.findByIndex(index))
}

function updateMusic() { //check l

    let index = +input.question('Enter index of song : ');
    let nameSong = input.question('Enter name song : ');
    let singer = input.question('Enter name singer : ');
    let id = +input.question('Enter id of song  : ')
    let newMusic: Music = new Music(nameSong, singer, id);
    for (let i = 0; i < manageMusic.listMusic.length; i++) {
        if (manageMusic.listMusic[i].nameOfMusic == newMusic.nameOfMusic) {
            if (manageMusic.listMusic[i].singer == newMusic.singer) {
                console.log('Name music or singer name are duplicated !!!')
            } else if (newMusic.nameOfMusic === '') {
                if (newMusic.singer === '') {
                    console.log('Name music and singer cannot be blank !!!')
                }
            }
        } else manageMusic.update(index, newMusic);
    }
    listMusic();
}

function showListMusic() {
    console.log(manageMusic.read())
}

function deleteMusic() {
    let choice: number;

    do {
        let menu = `
    1.Delete a song.
    0.Menu.`
        console.log(menu)
        choice = +input.question('Enter your selection :')
        switch (choice) {
            case 1:
                inputIndex();
                break;
            case 2:
                mainMenu();
                break;
        }
    } while (choice != 0)
}

function inputIndex() {
    let choice: number;
    let index = +input.question('Enter index of music : ')
    let menu = `Do you want to delete this song ?
    1.Yes
    2.No`
    if (index > 0) {
        console.log(menu)
        do {
            choice = +input.question('Enter your selection : ')
            switch (choice) {
                case 1:
                    manageMusic.deleteByIndex(index);
                    listMusic();
                    break;
                case 2:
                    deleteMusic();
                    break;
            }
        } while (choice != 0)
    } else {
        console.log('Please enter index of music !!!')
    }
}

function addMusicInAlbum() {
    console.log(manageAlbum.read());
    console.log(manageMusic.read());
    let selectAlbum = +input.question('Enter id album : ');
    let selectMusic = +input.question('Enter id music : ');
    let album:ListMusic = manageAlbum.findById(selectAlbum);
    let music = manageMusic.findById(selectMusic);
    album.create(music)
    console.log(album)
}

function myAlbums() {
    let choice: number;
    do {
        let menu = `
    1.Create new album.
    2.Delete album.
    3.Update album.
    4.Show all album.
    0.Main menu.`
        console.log(menu);
        choice = +input.question('Enter your selection : ')
        switch (choice) {
            case 1:
                createNewAlbum();
                break;
            case 2:
                deleteAlbum();
                break;
            case 3:
                updateAlbum();
                break;
            case 4:
                showAllAlbum();
                break;

            case 0:
                mainMenu();
                break;
        }
    } while (choice != 0)


}


function createNewAlbum() {
    let nameAlbum = input.question('Enter name of album : ');
    let id = +input.question('Enter ID of album : ')
    let newAlbum: ListMusic = new ListMusic(id, nameAlbum);
    if (nameAlbum == '') {
        console.log('Please enter name of album !!!')
    } else manageAlbum.create(newAlbum);
}

function deleteAlbum() {
    let choice: number;
    do {
        let menu = `
    1.Delete an album.
    0.Menu.`
        console.log(menu)
        choice = +input.question('Enter your selection :')
        switch (choice) {
            case 1:
                inputIndexOfAlbum();
                break;
            case 2:
                myAlbums();
                break;
        }
    } while (choice != 0)
}

function inputIndexOfAlbum() {
    let choice: number;
    let index = +input.question('Enter index of album : ')
    let menu = `Do you want to delete this album ?
    1.Yes
    2.No`
    if (index > 0) {
        console.log(menu)
        do {
            choice = +input.question('Enter your selection : ')
            switch (choice) {
                case 1:
                    manageAlbum.deleteByIndex(index);
                    myAlbums();
                    break;
                case 2:
                    deleteAlbum();
                    break;
            }
        } while (choice != 0)
    } else {
        console.log('Please enter index of album !!!')
    }
}

function updateAlbum() {
    let nameAlbum = input.question('Enter name off album : ');
    let index = +input.question('Enter index of album : ')
    let id = +input.question('Enter ID of album : ')
    let newAlbum: ListMusic = new ListMusic(id, nameAlbum);
    for (let i = 0; i < manageAlbum.listAlbum.length; i++) {
        if (manageAlbum.listAlbum[i].listMusic == nameAlbum) {
            console.log('Name album are duplicated !!!')
        } else manageAlbum.update(index, newAlbum)
    }
}

function listAlbum() {
    let choice: number;
    do {
        let menu = `
        1.Show music in album.
        2.Search name album.
        0.Main menu`
        console.log(menu)
        choice = +input.question('Enter your selection : ')
        switch (choice) {
            case 1:
                showMusicInAlbum();
                break;
            case 2:
                searchNameAlbum();
                break;
            case 0:
                myAlbums();
                break;
        }
    } while (choice != 0)
}

function showMusicInAlbum() {
    let choice: number;
    let id = +input.question('Enter id of album : ')
    if (id > 0) {
        do {
            let menu = `
        1.Enter id of album : 
        0.Menu.`
            console.log(menu)
            choice = +input.question('Enter your selection : ')
            switch (choice) {
                case 1:
                    for (let i = 0; i < manageAlbum.listAlbum.length; i++) {
                        if(manageAlbum.listAlbum[i].idAlbum==id) {
                            console.log(manageAlbum.listAlbum[i])
                        }
                    }
                    break;
                case 0:
                    myAlbums();
                    break;
            }
        } while (choice != 0)
    }
}

function showAllAlbum() {
    manageAlbum.read()
}

function searchNameAlbum() {
    let nameAlbum = input.question('Enter name of album : ')
    manageAlbum.findByName(nameAlbum);
    listAlbum();
}

menuSignUp();
