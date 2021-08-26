"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const photo_app_1 = require("./photo-app");
const user = new photo_app_1.User(1, 'danieru', 'Daniel', true);
const album = new photo_app_1.Album(1, 'Platzi');
const picture = new photo_app_1.Picture(1, 'rtrttrtrt', '04/2020', photo_app_1.PhotoOrientation.Square);
// creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log(user);
