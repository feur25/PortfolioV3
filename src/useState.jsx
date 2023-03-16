import React, { useState } from 'react';
import MyContext from './MyContext';

function MyComponent() {
  const [myVariable, setMyVariable] = useState('valeur initiale');

  return (
    <MyContext.Provider value={{ myVariable, setMyVariable }}>
      {/* contenu de votre composant */}
    </MyContext.Provider>
  );
}

export default MyComponent;