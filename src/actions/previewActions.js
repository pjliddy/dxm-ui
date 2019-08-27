import {
  CONTENT_LAKE_URL,
  SITE_REPO_URL
} from '../config/constants';
import {
  PREVIEW_HTML,
  PREVIEW_JSON
} from '../config/actionTypes';

// move to utils file instead of actions

export const previewHtml = node => {
   window.open(`${SITE_REPO_URL}/${node.resourceType}/${node.id}.html`);

   return { type: PREVIEW_HTML };
};

export const previewJson = node => {
   window.open(`${CONTENT_LAKE_URL}/${node.resourceType}/${node.id}.json`);

   return { type: PREVIEW_JSON };
};
