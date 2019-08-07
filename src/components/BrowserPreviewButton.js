import React from 'react';
import Button from './Button';
import { SITE_REPO_URL }  from '../config';

const BrowserPreviewButton = ({node, type, hidden, children}) => {
  const onPreview = (node) => {
    window.open(`${SITE_REPO_URL}/${node.dataType}/${node.id}.html`);
  }

  if (hidden) {
    return null;
  }

  return (
    <Button buttonType={type}
            iconType="desktop"
            tooltipText="Preview in Browser"
            tooltipPosition="top right"
            onClick={() => onPreview(node)}>
      Preview in Browser
    </Button>
  );
}

export default BrowserPreviewButton;
