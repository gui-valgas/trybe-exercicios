// arquivo UserProfile.js
import React from 'react';
import Image from './Image';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p className="name"> { user.name } </p>
        <p className="email"> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

export default UserProfile;