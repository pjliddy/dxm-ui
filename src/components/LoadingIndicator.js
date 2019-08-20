import React from 'react';

const LoadingIndicator = props => {
  const { isLoading, message } = props;

  if (!isLoading) return null;

  return (
    <div className="ui active inverted dimmer">
      <div className="ui text loader">{message}</div>
    </div>
  );
}
export default LoadingIndicator;
