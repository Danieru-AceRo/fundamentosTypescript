// orientación para fotografías
// const lansdcape = 0;
// const portrait = 1;
// const squere = 2;
// const panomara = 3;

enum PhotoOrientation {
    lansdcape = 0,
    portrait = 1,
    squere = 2,
    panomara = 3
}

const lansdcape: PhotoOrientation = PhotoOrientation.lansdcape;
console.log(lansdcape);
console.log(PhotoOrientation[lansdcape]);

enum PictureOrientation {
    lansdcape = 10,
    portrait,
    squere,
    panomara
}

console.log(PictureOrientation.panomara);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'usa',
    espana = 'esp',
}

const bolivia: Country = Country.Bolivia;
console.log(bolivia);