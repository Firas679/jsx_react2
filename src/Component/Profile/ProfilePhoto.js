import React from 'react';
import img from '../../img.png'
function ProfilePhoto() {
    return (
      <div className="photo">
          <img src={img} className="profile-photo" alt="photo" />
      </div>
    );
}
export default ProfilePhoto;
    