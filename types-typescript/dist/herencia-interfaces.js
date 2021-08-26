"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
;
;
const album = {
    id: 1,
    title: 'meetups',
    description: 'comunity events around the world'
};
const picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
};
let newPicture = {};
newPicture.id = 2;
newPicture.title = 'moon';
console.log(album);
console.log(picture);
console.log(newPicture);
