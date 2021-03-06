import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import '../App.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = { albums: albumData };
  }

  render() {
    return (
      <section className="library">
        {this.state.albums.map((album, index) => (
          <Link id="album-info-links" to={`/album/${album.slug}`} key={index}>
            <div className="album-display">
              <img
                id="album-image-library"
                src={album.albumCover}
                alt={album.title}
              />
              <div id="album-info-library">
                <div id="album-title-library">Album: {album.title}</div>
                <div id="artist-name-library">Artist: {album.artist}</div>
                <div id="track-number-library">
                  Tracks: {album.songs.length}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>
    )
  }
}

export default Library;
