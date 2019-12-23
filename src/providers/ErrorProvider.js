import React, { createContext, useState, useEffect } from 'react';

export const ErrorContext = createContext();

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  return (
    <ErrorContext.Provider
      value={{
        error,
        setError
      }}
    >
      {children}
    </ErrorContext.Provider>
  );
};

export default ErrorProvider;
