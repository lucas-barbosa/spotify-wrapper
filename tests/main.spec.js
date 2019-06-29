import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import {
  search, searchAlbums, searchArtists, searchTracks, searchPlaylists,
} from '../src/main.js';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Spotify Wrapper', () => {
  let fetchedStub;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    fetchedStub.resolves({ json: () => {} });
  });

  afterEach(() => {
    fetchedStub.restore();
  });

  describe('smoke tests', () => {
    it('should exists the search method', () => {
      expect(search).to.exist;
    });

    it('should exists the searchAlbums method', () => {
      expect(searchAlbums).to.exist;
    });

    it('should exists the searchArtists method', () => {
      expect(searchArtists).to.exist;
    });

    it('should exists the searchTracks method', () => {
      expect(searchTracks).to.exist;
    });

    it('should exists the searchPlaylists method', () => {
      expect(searchPlaylists).to.exist;
    });
  });

  describe('Generic Search', () => {
    it('should call fetch function', () => {
      const artists = search({ query: '', type: '' });
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should receive the correct url to fetch', () => {
      context('passing only one type', () => {
        const artists = search({
          query: 'Gabriela Rocha',
          type: 'artist',
        });

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=artist',
        );

        const albums = search({
          query: 'Gabriela Rocha',
          type: 'albums',
        });

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=albums',
        );
      });

      context('passing more then one type', () => {
        const artistsAndAlbums = search({
          query: 'Gabriela Rocha',
          type: ['artist', 'album'],
        });

        expect(fetchedStub).to.have.been.calledWith(
          'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=artist,album',
        );
      });
    });
  });

  describe('searchArtists()', () => {
    it('should call fetch function', () => {
      const artists = searchArtists('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const artists = searchArtists('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=artist',
      );

      const artists2 = searchArtists('Gabriel Guedes');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriel%20Guedes&type=artist',
      );
    });
  });

  describe('searchAlbums()', () => {
    it('should call fetch function', () => {
      const albums = searchAlbums('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const albums = searchAlbums('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=albums',
      );

      const albums2 = searchAlbums('Gabriel Guedes');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriel%20Guedes&type=albums',
      );
    });
  });

  describe('searchTracks()', () => {
    it('should call fetch function', () => {
      const tracks = searchTracks('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with the correct url', () => {
      const tracks = searchTracks('Gabriela Rocha');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriela%20Rocha&type=track',
      );

      const tracks2 = searchTracks('Gabriel Guedes');
      expect(fetchedStub).to.have.been.calledWith(
        'https://api.spotify.com/v1/search?q=Gabriel%20Guedes&type=track',
      );
    });
  });
});
