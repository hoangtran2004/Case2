"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Music_1 = require("../model/Music");
var Account_1 = require("../model/Account");
var ListMusic_1 = require("../service/ListMusic");
var ManageAlbum_1 = require("../service/ManageAlbum");
var ManageRegister_1 = require("../service/ManageRegister");
var input = require('readline-sync');
var manageRegister = new ManageRegister_1.ManageRegister();
var manageAlbum = new ManageAlbum_1.ManageAlbum();
var manageMusic = new ListMusic_1.ListMusic(0, '');
function menuSignUp() {
    var choice;
    var menu = "\n    -----Welcome,do you have account ?-----\n    1.I have account .\n    2.I don't have account.";
    console.log(menu);
    choice = +input.question('Enter your selection : ');
    switch (choice) {
        case 1:
            menuLogIn();
            break;
        case 2:
            signUp();
            break;
    }
}
function menuLogIn() {
    var choice;
    do {
        var menu = "\n    1.Login.\n    0.Out.";
        console.log(menu);
        choice = +input.question('Enter your selection : ');
        switch (choice) {
            case 1:
                inputInfo();
                break;
            case 0:
                menuSignUp();
                break;
        }
    } while (choice != 0);
}
function signUp() {
    var choice;
    do {
        var menu = "\n    1.Sign up.\n    0.Out.";
        console.log(menu);
        choice = +input.question('Enter your selection : ');
        switch (choice) {
            case 1:
                registerAccount();
                break;
            case 0:
                menuSignUp();
        }
    } while (choice != 0);
}
function registerAccount() {
    var userName = input.question('Enter your name account : ');
    var password = input.question('Enter your password : ');
    var account = new Account_1.Account(userName, password);
    if (account.userName == '') {
        if (account.password == '') {
            console.log('User name and password cannot be blank !!!');
        }
    }
    else
        manageRegister.signUp(account);
    menuSignUp();
}
function inputInfo() {
    var userNameLogIn = "";
    var passwordLogIn = "";
    do {
        userNameLogIn = input.question('Enter your name login : ');
        passwordLogIn = input.question('Enter password login : ');
        manageRegister.signIn(userNameLogIn, passwordLogIn);
        if (manageRegister.signIn(userNameLogIn, passwordLogIn) == true) {
            mainMenu();
        }
        else if (userNameLogIn == '') {
            if (passwordLogIn == '') {
                console.log('User name and password cannot be blank !!!');
            }
        }
        else
            console.log('Account name or password incorrect !!!');
        menuLogIn();
    } while (!manageRegister.signIn(userNameLogIn, passwordLogIn));
}
function listMusic() {
    var choice;
    do {
        var menu = "\n         1.Add new music.\n         2.Find music by name.\n         3.Find music by index.\n         4.Update new music.\n         5.List music.\n         6.Delete music.\n         7.Add music in album.\n         0.Main menu.";
        console.log(menu);
        choice = +input.question('Enter your selection : ');
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
    } while (choice != 0);
}
function mainMenu() {
    var choice;
    do {
        var menu = "\n        -----Login success-----\n    1.Music.\n    2.Albums.\n    3.List album.\n    0.Log out.";
        console.log(menu);
        choice = +input.question('Enter your selection : ');
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
    } while (choice != 0);
}
function addMusic() {
    var nameMusic = input.question('Enter name song : ');
    var singer = input.question('Enter name singer  : ');
    var id = +input.question('Enter id of song : ');
    var music = new Music_1.Music(nameMusic, singer, id);
    if (music.nameOfMusic == '') {
        if (music.singer == '') {
            console.log('Name music and singer cannot be blank !!! ');
        }
    }
    else
        manageMusic.create(music);
    listMusic();
}
function findNameMusic() {
    var name = input.question('Enter name song you want to find :');
    if (name == '') {
        console.log('Please enter name !!!');
    }
    else {
        manageMusic.findByName(name);
    }
}
function findIndexMusic() {
    var index = +input.question('Enter song number : ');
    if (index == null) {
        console.log('Please enter index of music : ');
    }
    console.log(manageMusic.findByIndex(index));
}
function updateMusic() {
    var index = +input.question('Enter index of song : ');
    var nameSong = input.question('Enter name song : ');
    var singer = input.question('Enter name singer : ');
    var id = +input.question('Enter id of song  : ');
    var newMusic = new Music_1.Music(nameSong, singer, id);
    if (manageAlbum.findById(id) != null) {
        for (var i = 0; i < manageMusic.listMusic.length; i++) {
            if (manageMusic.listMusic[i].nameOfMusic == newMusic.nameOfMusic) {
                if (manageMusic.listMusic[i].singer == newMusic.singer) {
                    console.log('The song already exist!!!');
                }
                else if (newMusic.nameOfMusic == '') {
                    if (newMusic.singer == '') {
                        console.log('Name music and singer cannot be blank !!!');
                    }
                }
            }
            else
                manageMusic.update(index, newMusic);
        }
    }
    else
        console.log('Not found album !!!');
    listMusic();
}
function showListMusic() {
    manageMusic.read();
}
function deleteMusic() {
    var choice;
    do {
        var menu = "\n    1.Delete a song.\n    0.Menu.";
        console.log(menu);
        choice = +input.question('Enter your selection :');
        switch (choice) {
            case 1:
                inputIndex();
                break;
            case 2:
                mainMenu();
                break;
        }
    } while (choice != 0);
}
function inputIndex() {
    var choice;
    var index = +input.question('Enter index of music : ');
    var menu = "Do you want to delete this song ?\n    1.Yes\n    2.No";
    if (index > 0) {
        console.log(menu);
        do {
            choice = +input.question('Enter your selection : ');
            switch (choice) {
                case 1:
                    manageMusic.deleteByIndex(index);
                    listMusic();
                    break;
                case 2:
                    deleteMusic();
                    break;
            }
        } while (choice != 0);
    }
    else {
        console.log('Please enter index of music !!!');
    }
}
function addMusicInAlbum() {
    var selectAlbum = +input.question('Enter id album : ');
    var selectMusic = +input.question('Enter id music : ');
    var album = manageAlbum.findById(selectAlbum);
    var music = manageMusic.findById(selectMusic);
    album.create(music);
    console.log(album);
}
function myAlbums() {
    var choice;
    do {
        var menu = "\n    1.Create new album.\n    2.Delete album.\n    3.Update album.\n    4.Show all album.\n    0.Main menu.";
        console.log(menu);
        choice = +input.question('Enter your selection : ');
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
    } while (choice != 0);
}
function createNewAlbum() {
    var nameAlbum = input.question('Enter name of album : ');
    var id = +input.question('Enter ID of album : ');
    var newAlbum = new ListMusic_1.ListMusic(id, nameAlbum);
    if (nameAlbum == '') {
        console.log('Please enter name of album !!!');
    }
    else
        manageAlbum.create(newAlbum);
}
function deleteAlbum() {
    var choice;
    do {
        var menu = "\n    1.Delete an album.\n    0.Menu.";
        console.log(menu);
        choice = +input.question('Enter your selection :');
        switch (choice) {
            case 1:
                inputIndexOfAlbum();
                break;
            case 2:
                myAlbums();
                break;
        }
    } while (choice != 0);
}
function inputIndexOfAlbum() {
    var choice;
    var index = +input.question('Enter index of album : ');
    var menu = "Do you want to delete this album ?\n    1.Yes\n    2.No";
    if (index > 0) {
        console.log(menu);
        do {
            choice = +input.question('Enter your selection : ');
            switch (choice) {
                case 1:
                    manageAlbum.deleteByIndex(index);
                    myAlbums();
                    break;
                case 2:
                    deleteAlbum();
                    break;
            }
        } while (choice != 0);
    }
    else {
        console.log('Please enter index of album !!!');
    }
}
function updateAlbum() {
    var nameAlbum = input.question('Enter name off album : ');
    var index = +input.question('Enter index of album : ');
    var id = +input.question('Enter ID of album : ');
    var newAlbum = new ListMusic_1.ListMusic(id, nameAlbum);
    for (var i = 0; i < manageAlbum.listAlbum.length; i++) {
        if (manageAlbum.listAlbum[i].listMusic == nameAlbum) {
            console.log('Name album are duplicated !!!');
        }
        else
            manageAlbum.update(index, newAlbum);
    }
}
function listAlbum() {
    var choice;
    do {
        var menu = "\n        1.Show music in album.\n        2.Search name album.\n        0.Main menu";
        console.log(menu);
        choice = +input.question('Enter your selection : ');
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
    } while (choice != 0);
}
function showMusicInAlbum() {
    var choice;
    var id = +input.question('Enter id of album : ');
    if (manageAlbum.findById(id) != null) {
        do {
            var menu = "\n        1.Enter id of album : \n        0.Menu.";
            console.log(menu);
            choice = +input.question('Enter your selection : ');
            switch (choice) {
                case 1:
                    for (var i = 0; i < manageAlbum.listAlbum.length; i++) {
                        if (manageAlbum.listAlbum[i].idAlbum === id) {
                            console.log(manageAlbum.listAlbum[i]);
                        }
                    }
                    listAlbum();
                    break;
                case 0:
                    myAlbums();
                    break;
            }
        } while (choice != 0);
    }
    else
        console.log('Not found!!!');
}
function showAllAlbum() {
    manageAlbum.read();
}
function searchNameAlbum() {
    var nameAlbum = input.question('Enter name of album : ');
    if (nameAlbum == '') {
        console.log('Please enter name of album :');
    }
    else
        manageAlbum.findByName(nameAlbum);
    listAlbum();
}
menuSignUp();
