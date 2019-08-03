import React from 'react';
import { CONTENT_LAKE_URL }  from '../config';

const ShowJson = ({node, type, hidden, children}) => {
  const onShowJson = (node) => {
    window.open(`${CONTENT_LAKE_URL}/${node.dataType}/${node.id}.json`);
  };

  const buttonStyles = `ui ${type === 'icon' ? 'basic ' : ''}button`;

  if (hidden) {
    return null;
  }

  return (
    <button className={buttonStyles}
            data-tooltip="Show JSON"
            data-position="top right"
            onClick={() => onShowJson(node)}>
      <i className="code icon"></i>
      {children}
    </button>
  );
}

export default ShowJson;
