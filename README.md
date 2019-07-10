# Spotify Wrapper

A wrapper to work with the [Spotify Web Api](https://developer.spotify.com/web-api).  
Based on [JS com TDD na Prática](https://www.udemy.com/js-com-tdd-na-pratica/), an awesome course.

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/), and this API is supported in the following browsers:

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Spotify Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## How to use

### ES6

```js
// to import a specific method
import SpotifyWrapper from 'spotify-wrapper';

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

// using  method
spotify.search.artists('Incubus');
```

### CommonJS

```js
const SpotifyWrapper = require('spotify-wrapper').default;

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="spotify-wrapper.umd.js"></script>

<!-- to import minified version -->
<script src="spotify-wrapper.umd.min.js"></script>
```

After that the library will be available to the Global as `SpotifyWrapper`. Follow an example:

```js

const spotify = new SpotifyWrapper({
  token: 'YOUR_TOKEN_HERE'
});

const albums = spotify.search.albums('Choosen Artist');
```

## Methods

> Follow the methods that the library provides.

### search.albums(query)

> Search for informations about Albums with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *album*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|

**Example**

```js
spotify.search.albums('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### search.artists(query)

> Search for informations about Artists with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *artist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.artists('Incubus')
  .then(data => {
    // do what you want with the data
  })
```

### search.tracks(query)

> Search for informations about Tracks with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *track*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.tracks('Drive')
  .then(data => {
    // do what you want with the data
  })
```

### search.playlists(query)

> Search for informations about Playlist with provided query. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-search-item/) with type defined as *playlist*.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* | 'Any search query'|


**Example**

```js
spotify.search.playlists('Happy Day')
  .then(data => {
    // do what you want with the data
  })
```

### album.getAlbum(id)

> Search for informations about a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### album.getAlbums(ids)

> Search for informations about some Albums with all id's. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-several-albums/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*Array of strings* | ['id1', 'id2']|

**Example**

```js
spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '1A2GTWGtFfWp7KSQTwWOyo'])
  .then(data => {
    // do what you want with the data
  })
```

### album.getTracks(id)

> Search for all tracks in a specific Album with provided id. Test in [Spotify Web Console](https://developer.spotify.com/web-api/console/get-album-tracks/).

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|

**Example**

```js
spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtists(ids)

> Get Several Artists with provided id. Test in [Spotify Web Console](https://developer.spotify.com/console/get-several-artists/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`ids`   |*string* | 'Specific id'|


**Example**

```js
spotify.artist.getArtists(['4aawyAB9vmqN3uQ7FjRGTy','dw5asd546asd2c41s5asd5'])
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtist(id)

> Get an Artist with provided id. Test in [Spotify Web Console](https://developer.spotify.com/console/get-artist/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
spotify.artist.getArtist('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtistTopTracks(id)

> Get an Artist's Top Tracks with provided id. Test in [Spotify Web Console](https://developer.spotify.com/console/get-artist-top-tracks/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
spotify.artist.getArtistTopTracks('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtistAlbums(id)

> Get an Artist's Albums with provided id. Test in [Spotify Web Console](https://developer.spotify.com/console/get-artist-albums/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
spotify.artist.getArtistAlbums('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### artist.getArtistRelatedArtists(id)

>	Get an Artist's Related Artists with provided id. Test in [Spotify Web Console](https://developer.spotify.com/console/get-artist-related-artists/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`id`   |*string* | 'Specific id'|


**Example**

```js
spotify.artist.getArtistRelatedArtists('4aawyAB9vmqN3uQ7FjRGTy')
  .then(data => {
    // do what you want with the data
  })
```

### follow.getFollowedArtists(type)

>	Get Followed Artists. Test in [Spotify Web Console](https://developer.spotify.com/console/get-following/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`type`   |*string* | 'Only artist at now.'|


**Example**

```js
spotify.follow.getFollowedArtists('artist')
  .then(data => {
    // do what you want with the data
  })
```

### follow.checkIfIFollow({ type, ids })

>	Check if Current User Follows Artists or Users. Test in [Spotify Web Console](https://developer.spotify.com/console/get-following-contains/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`type`   |*string* | 'artist or user.'|
|`ids`    |*string|array* | 'Specific ids'


**Example**

```js
spotify.follow.checkIfIFollow({ type: 'user', ids: ['blablabla', 'foofoofoo' ]})
  .then(data => {
    // do what you want with the data
  })
```

### follow.checkIfUsersFollowPlaylist({ playlistId, users })

>	Check if Users Follow a Playlist. Test in [Spotify Web Console](https://developer.spotify.com/console/get-playlist-followers-contains/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`playlistId` |*string* | 'playlist id'|
|`users`    |*string|array* | 'user ids'


**Example**

```js
spotify.follow.checkIfUsersFollowPlaylist({ playlistId: 'as45a51s5c8b1erwd', users: ['blablabla', 'foofoofoo' ]})
  .then(data => {
    // do what you want with the data
  })
```

### follow.followAPlaylist({ playlistId, isPublic })

>	Follow a Playlist. Test in [Spotify Web Console](https://developer.spotify.com/console/put-playlist-followers/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`playlistId` |*string* | 'playlist id'|
|`isPublic`   |*boolean* | true or false


**Example**

```js
spotify.follow.followAPlaylist({ playlistId: 'as45a51s5c8b1erwd', isPublic: false })
  .then(data => {
    // do what you want with the data
  })
```

### follow.followAnUser({ type, ids })

>	Follow Artists or Users. Test in [Spotify Web Console](https://developer.spotify.com/console/put-following/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`type`  |*string* | 'user or artist'|
|`ids`    |*string|array* | 'user ids'


**Example**

```js
spotify.follow.followAnUser({ type: 'user', ids: 'blablabla' })
  .then(data => {
    // do what you want with the data
  })
```

### follow.unfollowAPlaylist(playlistId)

>	Unfollow a Playlist. Test in [Spotify Web Console](https://developer.spotify.com/console/delete-playlist-followers/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`playlistId`  |*string* | 'playlist id'|


**Example**

```js
spotify.follow.unfollowAPlaylist('blablabla')
  .then(data => {
    // do what you want with the data
  })
```

### follow.unfollowAnUser({ type, ids })

>	Unfollow Artists or Users. Test in [Spotify Web Console](https://developer.spotify.com/console/delete-following/).

**Arguments**
| Argument | Type    | Options           |
|----------|---------|-------------------|
|`type`  |*string* | 'user or artist'|
|`ids`    |*string|array* | 'user ids'


**Example**

```js
spotify.follow.unfollowAnUser({ type: 'user', ids: 'blablabla' })
  .then(data => {
    // do what you want with the data
  })
```

## Contributing

Please read [CONTRIBUTING.md](/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).
