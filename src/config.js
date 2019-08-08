// String Constants
export const API_BASE_URL = 'https://kiuhmwwxi4.execute-api.us-east-1.amazonaws.com/dxm-api';
export const ASSET_REPO_BUCKET = 'dxm-file-repo';
export const ASSET_RESOURCE = 'assets';
export const CONTENT_LAKE_URL = 'https://dxm-content-lake.s3.amazonaws.com';
export const CONTENT_RESOURCE = 'nodes';
export const SITE_REPO_URL = 'https://dxm-site-repo.s3.amazonaws.com';

// Initial Reducer States
export const INITIAL_ASSETS_STATE = [];
export const INITIAL_CONTENTS_STATE = [];
export const INITIAL_ASSET_STATE = {
  id: '',
  dataType: 'asset',
  title: '',
  url: '',
  file: { },
  dateCreated: '',
  dateModified: ''
};
export const INTIAL_CONTENT_STATE = {
  id: '',
  dataType: 'content',
  title: '',
  subTitle: '',
  copyText: '',
  dateCreated: '',
  dateModified: ''
};
