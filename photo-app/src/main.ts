import { Album, PhotoOrientation, Picture, User } from "./photo-app";

const user = new User(1, 'danieru', 'Daniel', true)
const album = new Album(1,'Platzi');
const picture = new Picture(1, 'rtrttrtrt', '04/2020', PhotoOrientation.Square);
// creamos relaciones
user.addAlbum(album);
album.addPicture(picture);

console.log(user)