import SpotifyWrapper from '../src';

global.fetch = require('node-fetch');

const spotify = new SpotifyWrapper({
  token:
    'BQDeA7pm8nDXxxgccH950nefmLIJassxOeiptqRnOqbgTub6JDr3coiQZBPZ64tgxOtof2Zf0GU_wIzmqHwVaCI3azVxuCkRcltdHNolJ5jQmk2EAPhVtq6lJom1515-KxlGUkgoCJhxUzr7Ih-mh-adDLTdATtLAMymXhaaKT_lEHQoK7jXTegFcnmW5ylcCbF8GVLL-3GjPuy0LTno_2dvSfq_eAhWV3YFPhTSeQUpCBZ7S_HK-wsUKxLYRpCQCaoRuGTXhb_gSHKUaxlMrC-5RjtIGH_bCHQ',
});

const albums = spotify.search.albums('Gabriela Rocha');
albums.then(data => data.albums.items.map(album => console.log(album.name)));
