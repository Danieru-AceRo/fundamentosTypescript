export{};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Squere,
    Panorama
}

class Picture {
    // Propiedades
    private id: number;
    private title: string;
    private orientation: PhotoOrientation;

    public constructor( id: number,
                title: string,
                orientation: PhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation
    }

    // comportamiento
    public toString() {
        return `[id: ${this.id},
                title: ${this. title}
                orientation: ${this.orientation}]`
    }
}

class Album {
    // Propiedades
    private id: number;
    private title: string;
    private pictures: Picture[];

    public constructor( id: number,
                title: string,) {
        this.id = id;
        this.title = title;
        this.pictures = []
    }

    public addPicture(picture: Picture) {
        this.pictures.push(picture)
    }
}

const album: Album = new Album(1, 'Platzi');
const picture: Picture = new Picture(1, 'meeting course', PhotoOrientation.Landscape)
album.addPicture(picture);

console.log(album)

// Accediendo a las variables
// picture.id = 100;
// picture.title = 'jkjjdjkk';
// album.title = 'is private';

// no es posible acceder ya que son clases privadas