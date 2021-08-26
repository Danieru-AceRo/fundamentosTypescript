// funcion para mostrar una fotografia
export{}
enum PhotoOrientation{
    Landscape,
    Portrait,
    Squere,
    Panorama
}

interface Picture {
    title: string;
    date: string;
    orientation: PhotoOrientation
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}
                 date: ${picture.date}
                 orientation: ${picture.orientation}]`);
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientation.Squere,
    // extra: 'test'
});

interface PictureConfig{
    title?: string;
    date?: string;
    orientation?: PhotoOrientation
}

function generetePicture(config:PictureConfig) {
    const pic = {title: 'Default', date: '2020-02'};
    if (config.title) {
        pic.title = config.title
    } 
    if (config.date) {
        pic.date = config.date;
    }

    return pic;
}

let picture = generetePicture({});
console.log(picture);
picture = generetePicture({title:'travel pic'});
console.log(picture);


// interfaz: usuario
interface User {
    readonly id: number;
    userName: string;
    pro: boolean;
}

let user: User;
user = {
    id: 10, 
    userName: 'danieru',
    pro: true
}
console.log(user);
user.userName = 'dalix';
// user.id = 3; Error
console.log(user)