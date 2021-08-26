export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Squere,
    Panorama
}

interface Entity {
    id: number;
    title: string
}

interface Album extends Entity {
    // Copia de los atributos de Entity
    description: string
};

interface Picture extends Entity {
    orientation: PhotoOrientation
};

const album: Album  = {
    id: 1,
    title: 'meetups',
    description: 'comunity events around the world'
};

const picture: Picture = {
    id: 2,
    title: 'Family',
    orientation: PhotoOrientation.Landscape
};

let newPicture = {} as Picture;
newPicture.id = 2;
newPicture.title = 'moon';

console.log(album);
console.log(picture);
console.log(newPicture);
