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
    let fetchedStub;

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => {} });
    });

    afterEach(() => {
      fetchedStub.restore();
    });

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
});
