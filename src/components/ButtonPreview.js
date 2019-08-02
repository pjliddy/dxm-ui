import React from 'react';
import { SITE_REPO_URL }  from '../config';

const ButtonPreview = ({node}) => {
  const onPreview = (node) => {
    window.open(`${SITE_REPO_URL}/${node.dataType}/${node.id}.html`);
  }

  return (
    <button className="ui basic button"
            data-tooltip="Preview in Browser"
            data-position="top right"
            onClick={() => onPreview(node)}>
      <i className="desktop icon"></i>
    </button>
  );
}

export default ButtonPreview;
