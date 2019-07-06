export default function artist() {
  return {
    getArtist: id => this.request(`${this.apiURL}/artists/${id}`),
    getArtists: ids => this.request(`${this.apiURL}/artists?ids=${ids}`),
    getArtistTopTracks: id => this.request(`${this.apiURL}/artists/${id}/top-tracks`),
    getArtistAlbums: id => this.request(`${this.apiURL}/artists/${id}/albums`),
    getArtistRelatedArtists: id => this.request(`${this.apiURL}/artists/${id}/related-artists`),
  };
}
