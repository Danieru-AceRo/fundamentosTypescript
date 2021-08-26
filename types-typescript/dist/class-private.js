"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    // comportamiento
    toString() {
        return `[id: ${this.id},
                title: ${this.title}
                orientation: ${this.orientation}]`;
    }
}
class Album {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
const album = new Album(1, 'Platzi');
const picture = new Picture(1, 'meeting course', PhotoOrientation.Landscape);
album.addPicture(picture);
console.log(album);
// Accediendo a las variables
// picture.id = 100;
// picture.title = 'jkjjdjkk';
// album.title = 'is private';
// no es posible acceder ya que son clases privadas
