import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhoneAlt, faHouseUser, faShareAlt, faBriefcase } from '@fortawesome/free-solid-svg-icons';

import './userSingle.scss';

export const UserSingle = ({ user }) => (
  <div className="user-wrapper">
    <div className="user">
      <h3 className="user-name">{user.name}</h3>

      <div className="user-param">
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <div>
          <div>{user.email}</div>
          <p className="user-data">Email</p>
        </div>
      </div>

      <div className="user-param">
        <FontAwesomeIcon icon={faPhoneAlt} className="icon" />
        <div>
          <div>{user.phone}</div>
          <p className="user-data">Mobile</p>
        </div>
      </div>

      <div className="user-param">
        <FontAwesomeIcon icon={faHouseUser} className="icon" />
        <div>
          <div>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</div>
          <p className="user-data">Home</p>
        </div>
      </div>

      <div className="user-param">
        <FontAwesomeIcon icon={faShareAlt} className="icon" />
        <div>
          <div>{user.website}</div>
          <p className="user-data">Website</p>
        </div>
      </div>

      <div className="user-param">
        <FontAwesomeIcon icon={faBriefcase} className="icon" />
        <div>
          <div>{user.company.name}</div>
          <p className="user-data">Work</p>
        </div>
      </div>
    </div>
  </div>
);
