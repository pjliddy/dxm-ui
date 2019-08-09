import React from 'react';
import Button from './Button';
import { CONTENT_LAKE_URL }  from '../../config';

const ShowJsonButton = props => {
  const { node, type, hidden } = props;
  
  const onShowJsonButton = (node) => {
    window.open(`${CONTENT_LAKE_URL}/${node.dataType}/${node.id}.json`);
  };

  if (hidden) {
    return null;
  }

  return (
    <Button buttonType={type}
            iconType="code"
            tooltipText="Show JSON"
            tooltipPosition="top right"
            onClick={() => onShowJsonButton(node)}>
      Show JSON
    </Button>
  );
}

export default ShowJsonButton;
