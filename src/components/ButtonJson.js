import React from 'react';
import { CONTENT_LAKE_URL }  from '../config';

const ButtonJson = ({node}) => {
  const onShowJson = (node) => {
    window.open(`${CONTENT_LAKE_URL}/${node.dataType}/${node.id}.json`);
  };

  return (
    <button className="ui basic button"
            data-tooltip="Show JSON"
            data-position="top right"
            onClick={() => onShowJson(node)}>
      <i className="code icon"></i>
    </button>
  );
}

export default ButtonJson;
