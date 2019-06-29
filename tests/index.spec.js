import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import SpotifyWrapper from '../src';

global.fetch = require('node-fetch');

chai.use(sinonChai);
sinonStubPromise(sinon);

describe('Spotify Wrapper', () => {
  it('should creates an instance of SpotifyWrapper', () => {
    const spotify = new SpotifyWrapper();
    expect(spotify).to.be.an.instanceOf(SpotifyWrapper);
  });

  it('should receives an apiURL as option', () => {
    const spotify = new SpotifyWrapper({ apiURL: 'test' });
    expect(spotify.apiURL).to.be.equal('test');
  });

  it('should has a default apiURL when doesnt receives', () => {
    const spotify = new SpotifyWrapper();
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });

  it('should receives a token as option', () => {
    const spotify = new SpotifyWrapper({ token: 'test' });
    expect(spotify.token).to.be.equal('test');
  });

  describe('request()', () => {
    let fetchedStub;
    const token = 'foo';
    const spotify = new SpotifyWrapper({ token });

    beforeEach(() => {
      fetchedStub = sinon.stub(global, 'fetch');
      fetchedStub.resolves({ json: () => {} });
    });

    afterEach(() => {
      fetchedStub.restore();
    });

    it('should has a request method', () => {
      expect(spotify.request).to.exist;
    });

    it('should call fetch function', () => {
      spotify.request();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch with correct url', () => {
      spotify.request('url');
      expect(fetchedStub).to.have.been.calledWith('url');
    });

    it('should call fetch with correct headers', () => {
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      spotify.request('url');

      expect(fetchedStub).to.have.been.calledWith('url', headers);
    });
  });
});
