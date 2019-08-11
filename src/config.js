// String Constants
export const API_BASE_URL = 'https://kiuhmwwxi4.execute-api.us-east-1.amazonaws.com/dxm-api';
export const ASSET_REPO_BUCKET = 'dxm-file-repo';
export const ASSET_RESOURCE = 'assets';
export const CONTENT_LAKE_URL = 'https://dxm-content-lake.s3.amazonaws.com';
export const CONTENT_RESOURCE = 'contents';
export const SITE_REPO_URL = 'https://dxm-site-repo.s3.amazonaws.com';

// Messages
export const RECEIVING_DATA_MESSAGE = 'Receiving Data...';
export const SENDING_DATA_MESSAGE = 'Sending Data...';

// Initial Reducer States
export const INITIAL_ASSETS_STATE = [];
export const INITIAL_CONTENTS_STATE = [];
export const INITIAL_METADATA_STATE = {
  isLoading: false,
  redirect: false
};
export const INITIAL_PREVIEW_STATE = { };
export const INITIAL_SELECTED_ASSET_STATE = {
  id: '',
  resourceType: ASSET_RESOURCE,
  title: '',
  url: '',
  file: { },
  dateCreated: '',
  dateModified: ''
};
export const INITIAL_SELECTED_CONTENT_STATE = {
  id: '',
  resourceType: CONTENT_RESOURCE,
  title: '',
  subTitle: '',
  copyText: '',
  dateCreated: '',
  dateModified: ''
};
export const INITIAL_UPLOAD_STATE = {
  fileObj: { },
  fileUrl: '',
  id: '',
  isNew: false,
  isUploading: false,
  progress: 0,
  uploadUrl: ''
};
