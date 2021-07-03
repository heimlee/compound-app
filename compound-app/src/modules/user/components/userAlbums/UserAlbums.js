import React from 'react';

import './userAlbums.scss';

export const UserAlbums = ({ album }) => (
  <div className="user-album">
    {album.title}
  </div>
);
