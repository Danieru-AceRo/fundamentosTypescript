"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Squere"] = 2] = "Squere";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log(`[title: ${picture.title}
                 date: ${picture.date}
                 orientation: ${picture.orientation}]`);
}
let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Squere,
    // extra: 'test'
});
function generetePicture(config) {
    const pic = { title: 'Default', date: '2020-02' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
let picture = generetePicture({});
console.log(picture);
picture = generetePicture({ title: 'travel pic' });
console.log(picture);
let user;
user = {
    id: 10,
    userName: 'danieru',
    pro: true
};
console.log(user);
user.userName = 'dalix';
// user.id = 3; Error
console.log(user);
