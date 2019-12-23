import React, { createContext, useState, useEffect } from 'react';

import { storage } from '../firebase';

export const ImageContext = createContext();

const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const storageRef = storage.ref('unDraw');

    storageRef
      .listAll()
      .then(result => {
        result.items.forEach(imageRef => {
          imageRef
            .getDownloadURL()
            .then(url => {
              setImages(prevState => {
                return [...prevState, url];
              });
            })
            .catch(error => {
              console.log(error);
              // Handle any errors
            });
        });
      })
      .catch(function(error) {
        // Handle any errors
        console.log(error);
      });
  }, []);

  return (
    <ImageContext.Provider
      value={{
        images
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export default ImageProvider;
