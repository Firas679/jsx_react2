import React from 'react';
const Address = () => {
  const address = {
    street: 'Elmalouf City',
    city: 'Testour',
  };
  return (
    <div>
      <div>{address.street}, {address.city}</div>
    </div>
  );
}

export default Address;