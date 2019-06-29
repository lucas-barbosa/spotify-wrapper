import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import SpotifyWrapper from '../src';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Search', () => {
  let fetchedStub;
  const spotify = new SpotifyWrapper({ token: 'foo' });

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exists the search generic method', () => {
      expect(spotify.search.generic).to.exist;
    });

    it('should exists the searchAlbums method', () => {
      expect(spotify.search.albums).to.exist;
    });

    it('should exists the searchArtists method', () => {
      expect(spotify.search.artists).to.exist;
    });

    it('should exists the searchTracks method', () => {
      expect(spotify.search.tracks).to.exist;
    });

    it('should exists the searchPlaylists method', () => {
      expect(spotify.search.playlists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.generic({ query: '', type: '' });
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing only one type', () => {
        const artists = spotify.search.generic('artist', 'Gabriela Rocha');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=artist',
        );

        const albums = spotify.search.generic('album', 'Gabriela Rocha');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=album',
        );
      });

      context('passing more then one type', () => {
        const artistsAndAlbums = spotify.search.generic(['artist', 'album'], 'Gabriela Rocha');

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=artist,album',
        );
      });
    });
  });

  describe('spotify.search.artists()', () => {
    it('should call fetch function', () => {
      const artists = spotify.search.artists('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = spotify.search.artists('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=artist',
      );

      const artists2 = spotify.search.artists('Gabriel Guedes');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriel%20Guedes&type=artist',
      );
    });
  });

  describe('spotify.search.albums()', () => {
    it('should call fetch function', () => {
      const albums = spotify.search.albums('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = spotify.search.albums('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=album',
      );

      const albums2 = spotify.search.albums('Gabriel Guedes');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriel%20Guedes&type=album',
      );
    });
  });

  describe('spotify.search.tracks()', () => {
    it('should call fetch function', () => {
      const tracks = spotify.search.tracks('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = spotify.search.tracks('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=track',
      );

      const tracks2 = spotify.search.tracks('Gabriel Guedes');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriel%20Guedes&type=track',
      );
    });
  });

  describe('spotify.search.playlists()', () => {
    it('should call fetch function', () => {
      spotify.search.playlists('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      spotify.search.playlists('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=playlist',
      );

      spotify.search.playlists('Gabriel Guedes');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriel%20Guedes&type=playlist',
      );
    });
  });
});
