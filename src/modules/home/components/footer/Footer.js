import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

import './footer.scss';

export const Footer = () => {
  let d = new Date();
  let year = d.getFullYear();
  return(
    <footer className="home-footer">
      <div className="copyright">
        <FontAwesomeIcon className="copyright-icon" icon={faCopyright} />
        <p>{year}</p>
      </div>
    </footer>
  );
};
