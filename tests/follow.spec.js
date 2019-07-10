import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import SpotifyWrapper from '../src';

chai.use(sinonChai);
global.fetch = require('node-fetch');

describe('Follow', () => {
  let stubedFetch;
  const token = 'foobar';
  const spotify = new SpotifyWrapper({ token });
  const options = { headers: { Authorization: `Bearer ${token}` } };

  beforeEach(() => {
    stubedFetch = sinon.stub(global, 'fetch');
    stubedFetch.resolves({ json: () => {} });
  });

  afterEach(() => {
    stubedFetch.restore();
  });

  describe('smoke test', () => {
    it('should exists spotify.follow.getFollowedArtists', () => {
      expect(spotify.follow.getFollowedArtists).to.exist;
    });

    it('should exists spotify.follow.checkIfIFollow', () => {
      expect(spotify.follow.checkIfIFollow).to.exist;
    });

    it('should exists spotify.follow.checkIfUsersFollowPlaylist', () => {
      expect(spotify.follow.checkIfUsersFollowPlaylist).to.exist;
    });

    it('should exists spotify.follow.followAPlaylist', () => {
      expect(spotify.follow.followAPlaylist).to.exist;
    });

    it('should exists spotify.follow.followAnUser', () => {
      expect(spotify.follow.followAnUser).to.exist;
    });

    it('should exists spotify.follow.unfollowAPlaylist', () => {
      expect(spotify.follow.unfollowAPlaylist).to.exist;
    });

    it('should exists spotify.follow.unfollowAnUser', () => {
      expect(spotify.follow.unfollowAnUser).to.exist;
    });
  });

  describe('spotify.follow.getFollowedArtists', () => {
    it('should call fetch function', () => {
      spotify.follow.getFollowedArtists();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch function', () => {
      spotify.follow.getFollowedArtists('artist');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following?type=artist',
      );
    });
  });

  describe('spotify.follow.checkIfIFollow', () => {
    it('should call fetch function', () => {
      spotify.follow.checkIfIFollow();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch function', () => {
      spotify.follow.checkIfIFollow({ type: 'artist', ids: '2CIMQHirSU0MQqyYHq0eOx' });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following/contains?type=artist&ids=2CIMQHirSU0MQqyYHq0eOx',
      );

      spotify.follow.checkIfIFollow({
        type: 'user',
        ids: ['2CIMQHirSU0MQqyYHq0dac', '2CIMQHirSU0MQqyYHq0eOx'],
      });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following/contains?type=user&ids=2CIMQHirSU0MQqyYHq0dac,2CIMQHirSU0MQqyYHq0eOx',
      );
    });
  });

  describe('spotify.follow.checkIfUsersFollowPlaylist', () => {
    it('should call fetch function', () => {
      spotify.follow.checkIfUsersFollowPlaylist();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch function', () => {
      spotify.follow.checkIfUsersFollowPlaylist({
        playlistId: '3cEYpjA9oz9GiPac4AsH4n',
        users: 'jmperezperez',
      });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/followers/contains?ids=jmperezperez',
      );

      spotify.follow.checkIfUsersFollowPlaylist({
        playlistId: '3cEYpjA9oz9GiPac4dhH4n',
        users: ['jmperezperez', 'thelinmichael'],
      });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4dhH4n/followers/contains?ids=jmperezperez,thelinmichael',
      );
    });
  });

  describe('spotify.follow.followAPlaylist', () => {
    it('should call fetch function', () => {
      spotify.follow.followAPlaylist();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch function', () => {
      spotify.follow.followAPlaylist({ playlistId: '3cEYpjA9oz9GiPac4AsH4n', isPublic: false });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n/followers',
      );

      spotify.follow.followAPlaylist({ playlistId: '3cEYpjA9oz9GiPac4Adshn', isPublic: true });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4Adshn/followers',
      );
    });

    it('should been called with put http method', () => {
      spotify.follow.followAPlaylist({ playlistId: '3cEYpjA9oz9GiPac4Adshn', isPublic: true });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4Adshn/followers',
        { ...options, method: 'put', body: JSON.stringify({ public: true }) },
      );
    });
  });

  describe('spotify.follow.followAnUser', () => {
    it('should call fetch function', () => {
      spotify.follow.followAnUser();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch function', () => {
      spotify.follow.followAnUser({ type: 'artist', ids: 'blablabla' });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following?type=artist&ids=blablabla',
      );

      spotify.follow.followAnUser({ type: 'user', ids: ['foofoofoo', 'blablabla'] });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following?type=user&ids=foofoofoo,blablabla',
      );
    });

    it('should been called with put http method', () => {
      spotify.follow.followAnUser({ type: 'user', ids: ['foofoofoo', 'blablabla'] });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following?type=user&ids=foofoofoo,blablabla',
        { ...options, method: 'put', body: JSON.stringify({}) },
      );
    });
  });

  describe('spotify.follow.unfollowAPlaylist', () => {
    it('should call fetch function', () => {
      spotify.follow.unfollowAPlaylist();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch function', () => {
      spotify.follow.unfollowAPlaylist('blabla');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/blabla/followers',
      );

      spotify.follow.unfollowAPlaylist('foofoo');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/foofoo/followers',
      );
    });

    it('should been called with delete http method', () => {
      spotify.follow.unfollowAPlaylist('foofoo');
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/playlists/foofoo/followers',
        { ...options, method: 'delete' },
      );
    });
  });

  describe('spotify.follow.unfollowAnUser', () => {
    it('should call fetch function', () => {
      spotify.follow.unfollowAnUser();
      expect(stubedFetch).to.have.been.calledOnce;
    });

    it('should call the correct url on fetch function', () => {
      spotify.follow.unfollowAnUser({ type: 'user', ids: 'barbarbar' });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following?type=user&ids=barbarbar',
      );

      spotify.follow.unfollowAnUser({ type: 'artist', ids: ['blablabla', 'foofoofoo'] });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following?type=artist&ids=blablabla,foofoofoo',
      );
    });

    it('should been called with delete http method', () => {
      spotify.follow.unfollowAnUser({ type: 'user', ids: 'barbarbar' });
      expect(stubedFetch).to.have.been.calledWith(
        'https://api.spotify.com/v1/me/following?type=user&ids=barbarbar',
        { ...options, method: 'delete' },
      );
    });
  });
});
