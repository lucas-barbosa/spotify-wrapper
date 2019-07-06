import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Artist', () => {
  let stubedFetch;
  const spotify = new SpotifyWrapper({ token: 'foo' });

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => {} });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke tests', () => {
    it('should exists spotify.artist.getArtists()', () => {
      expect(spotify.artist.getArtists).to.exist;
    });

    it('should exists spotify.artist.getArtist()', () => {
      expect(spotify.artist.getArtist).to.exist;
    });

    it('should exists spotify.artist.getArtistTopTracks()', () => {
      expect(spotify.artist.getArtistTopTracks).to.exist;
    });

    it('should exists spotify.artist.getArtistAlbums()', () => {
      expect(spotify.artist.getArtistAlbums).to.exist;
    });

    it('should exists spotify.artist.getArtistRelatedArtists()', () => {
      expect(spotify.artist.getArtistRelatedArtists).to.exist;
    });
  });

  describe('spotify.artist.getArtists()', () => {
    it('should call fetch function', () => {
      spotify.artist.getArtists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url with fetch function', () => {
      spotify.artist.getArtists([
        '2CIMQHirSU0MQqyYHq0eOx',
        '57dN52uHvrHOxijzpIgu3E',
        '1vCWHaC5f2uS3yhpwWbIA6',
      ]);
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6',
      );
    });
  });

  describe('spotify.artist.getArtist()', () => {
    it('should call fetch function', () => {
      spotify.artist.getArtist();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url with fetch function', () => {
      spotify.artist.getArtist('2CIMQHirSU0MQqyYHq0eOx');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx',
      );
    });
  });

  describe('spotify.artist.getArtistTopTracks()', () => {
    it('should call fetch function', () => {
      spotify.artist.getArtistTopTracks();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url with fetch function', () => {
      spotify.artist.getArtistTopTracks('2CIMQHirSU0MQqyYHq0eOx');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx/top-tracks',
      );
    });
  });

  describe('spotify.artist.getArtistAlbums()', () => {
    it('should call fetch function', () => {
      spotify.artist.getArtistAlbums();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url with fetch function', () => {
      spotify.artist.getArtistAlbums('2CIMQHirSU0MQqyYHq0eOx');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx/albums',
      );
    });
  });

  describe('spotify.artist.getArtistRelatedArtists()', () => {
    it('should call fetch function', () => {
      spotify.artist.getArtistRelatedArtists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url with fetch function', () => {
      spotify.artist.getArtistRelatedArtists('2CIMQHirSU0MQqyYHq0eOx');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx/related-artists',
      );
    });
  });
});
