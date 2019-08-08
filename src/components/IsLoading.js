import React from 'react';

const IsLoading = ({isLoading}) => {
  const loaderStyles = `ui ${isLoading ? 'active' : ''} inverted dimmer`;

  if (!isLoading) return null;

  return (
    <div className={loaderStyles}>
      <div className="ui text loader">Working...</div>
    </div>
  );
}
export default IsLoading;
