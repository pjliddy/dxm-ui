import {
  ASSET_RESOURCE,
  CONTENT_RESOURCE
} from './constants';

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
  subtitle: '',
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
