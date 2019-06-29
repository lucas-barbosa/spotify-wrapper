import { searchAlbums } from '../src/main';

global.fetch = require('node-fetch');

const albums = searchAlbums('Gabriela Rocha');
albums.then(data => data.albums.items.map(album => console.log(album.name)));
