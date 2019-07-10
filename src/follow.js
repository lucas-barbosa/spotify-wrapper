export default function follow() {
  return {
    getFollowedArtists: (type = 'artist') => this.request(`${this.apiURL}/me/following?type=${type}`),
    checkIfIFollow: ({ type = '', ids = '' } = {}) => this.request(`${this.apiURL}/me/following/contains?type=${type}&ids=${ids}`),
    checkIfUsersFollowPlaylist: ({ playlistId = '', users = '' } = {}) => this.request(`${this.apiURL}/playlists/${playlistId}/followers/contains?ids=${users}`),
    followAPlaylist: ({ playlistId = '', isPublic = false } = {}) => this.put(`${this.apiURL}/playlists/${playlistId}/followers`, { public: isPublic }),
    followAnUser: ({ type = '', ids = '' } = {}) => this.put(`${this.apiURL}/me/following?type=${type}&ids=${ids}`),
    unfollowAPlaylist: (playlistId = '') => this.delete(`${this.apiURL}/playlists/${playlistId}/followers`),
    unfollowAnUser: ({ type = '', ids = '' } = {}) => this.delete(`${this.apiURL}/me/following?type=${type}&ids=${ids}`),
  };
}
