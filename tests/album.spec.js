import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getAlbum, getAlbumTracks } from '../src/album';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Album', () => {
  let stubedFecth;

  beforeEach(() => {
    stubedFecth = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    stubedFecth.restore();
  });

  describe('smoke tests', () => {
    it('should exists the getAlbum method', () => {
      expect(getAlbum).to.exist;
    });

    it('should exists the getAlbumTracks method', () => {
      expect(getAlbumTracks).to.exist;
    });
  });

  describe('getAlbum()', () => {
    it('should call fetch function', () => {
      const album = getAlbum();
      expect(stubedFecth).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch', () => {
      getAlbum('05eC68WYd7WNccTVO5Dm9X');
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/05eC68WYd7WNccTVO5Dm9X',
      );

      getAlbum('5MNtZvAvFWwc6eFbrFLbg9');
      expect(stubedFecth).to.have.been.calledWith(
        'https://api.spotify.com/v1/albums/5MNtZvAvFWwc6eFbrFLbg9',
      );
    });
  });
});
