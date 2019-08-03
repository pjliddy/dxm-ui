import React from 'react';
import { SITE_REPO_URL }  from '../config';

const BrowserPreview = ({node, type, hidden, children}) => {
  const onPreview = (node) => {
    window.open(`${SITE_REPO_URL}/${node.dataType}/${node.id}.html`);
  }

  const buttonStyles = `ui ${type === 'icon' ? 'basic ' : ''}button`;

  if (hidden) {
    return null;
  }


  return (
    <button className={buttonStyles}
            data-tooltip="Preview in Browser"
            data-position="top right"
            onClick={() => onPreview(node)}>
      <i className="desktop icon"></i>
      {children}
    </button>
  );
}

export default BrowserPreview;
