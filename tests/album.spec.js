import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import SpotifyWrapper from '../src';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFecth;
  const spotify = new SpotifyWrapper({ token: 'foo' });

  beforeEach(() => {
    stubedFecth = sinon.stub(global, 'fetch');
    stubedFecth.resolves({ json: () => {} });
  });

  afterEach(() => {
    stubedFecth.restore();
  });

  describe('smoke tests', () => {
    it('should exists the spotify.album.getAlbum method', () => {
      expect(spotify.album.getAlbum).to.exist;
    });

    it('should exists the spotify.album.getAlbums method', () => {
      expect(spotify.album.getAlbums).to.exist;
    });

    it('should exists the spotify.album.getAlbumTracks method', () => {
      expect(spotify.album.getAlbumTracks).to.exist;
    });
  });

  describe('spotify.album.getAlbum()', () => {
    it('should call fetch function', () => {
      const album = spotify.album.getAlbum();
      expect(stubedFecth).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch', () => {
      spotify.album.getAlbum('05eC68WYd7WNccTVO5Dm9X');
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/05eC68WYd7WNccTVO5Dm9X',
      );

      spotify.album.getAlbum('5MNtZvAvFWwc6eFbrFLbg9');
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/5MNtZvAvFWwc6eFbrFLbg9',
      );
    });
  });

  describe('spotify.album.getAlbums()', () => {
    it('should call fetch function', () => {
      spotify.album.getAlbums();
      expect(stubedFecth).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch', () => {
      spotify.album.getAlbums(['05eC68WYd7WNccTVO5Dm9X', '5MNtZvAvFWwc6eFbrFLbg9']);
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums?ids=05eC68WYd7WNccTVO5Dm9X,5MNtZvAvFWwc6eFbrFLbg9',
      );

      spotify.album.getAlbums([
        '05eC68WYd7WNccTVO5Dm9X',
        '5MNtZvAvFWwc6eFbrFLbg9',
        '05eC68WYd7WNccTVO5D85X',
      ]);
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums?ids=05eC68WYd7WNccTVO5Dm9X,5MNtZvAvFWwc6eFbrFLbg9,05eC68WYd7WNccTVO5D85X',
      );
    });
  });

  describe('spotify.album.getAlbumTracks()', () => {
    it('should call fetch function', () => {
      spotify.album.getAlbumTracks();
      expect(stubedFecth).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch', () => {
      spotify.album.getAlbumTracks('05eC68WYd7WNccTVO5Dm9X');
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/05eC68WYd7WNccTVO5Dm9X/tracks',
      );

      spotify.album.getAlbumTracks('5MNtZvAvFWwc6eFbrFLbg9');
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/5MNtZvAvFWwc6eFbrFLbg9/tracks',
      );
    });
  });
});
