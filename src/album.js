import { API_URL } from './config';
import { toJSON } from './utils';

export default function album() {
  return {
    getAlbum: id => this.request(`${this.apiURL}/albums/${id}`),
    getAlbums: ids => this.request(`${this.apiURL}/albums?ids=${ids}`),
    getAlbumTracks: id => this.request(`${this.apiURL}/albums/${id}/tracks`),
  };
}
