import { DESELECT_UPLOAD_FILE, GET_PRESIGNED_URL, SELECT_UPLOAD_FILE, START_UPLOAD, STOP_UPLOAD, UPLOAD_FILE } from './types';

// INITIAL_UPLOAD_STATE = {
//   fileObj: { },
//   fileUrl: '',
//   isUploading: false,
//   uploadedBytes: 0,
//   uploadUrl: ''
// };

export const deselectUploadFile = () => async (dispatch, getState) => {
  return {
    type: DESELECT_UPLOAD_FILE,
    payload: { }
  };
};

export const getPresignedUrl = () => async (dispatch, getState) => {
  return {
    type: GET_PRESIGNED_URL,
    payload: { }
  };
};

export const selectUploadFile = () => async (dispatch, getState) => {
  return {
    type: SELECT_UPLOAD_FILE,
    payload: { }
  };
};

export const startUpload = () => async (dispatch, getState) => {
  return {
    type: START_UPLOAD,
    payload: { }
  };
};

export const stopUpload = () => async (dispatch, getState) => {
  return {
    type: STOP_UPLOAD,
    payload: { }
  };
};

export const uploadFile = () => async (dispatch, getState) => {
  return {
    type: UPLOAD_FILE,
    payload: { }
  };
};
