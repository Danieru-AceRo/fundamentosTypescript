"use strict";
// orientación para fotografías
// const lansdcape = 0;
// const portrait = 1;
// const squere = 2;
// const panomara = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["lansdcape"] = 0] = "lansdcape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["squere"] = 2] = "squere";
    PhotoOrientation[PhotoOrientation["panomara"] = 3] = "panomara";
})(PhotoOrientation || (PhotoOrientation = {}));
const lansdcape = PhotoOrientation.lansdcape;
console.log(lansdcape);
console.log(PhotoOrientation[lansdcape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["lansdcape"] = 10] = "lansdcape";
    PictureOrientation[PictureOrientation["portrait"] = 11] = "portrait";
    PictureOrientation[PictureOrientation["squere"] = 12] = "squere";
    PictureOrientation[PictureOrientation["panomara"] = 13] = "panomara";
})(PictureOrientation || (PictureOrientation = {}));
console.log(PictureOrientation.panomara);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["espana"] = "esp";
})(Country || (Country = {}));
const bolivia = Country.Bolivia;
console.log(bolivia);
