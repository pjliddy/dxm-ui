import { INITIAL_UPLOAD_STATE } from '../config';
import {
  DESELECT_UPLOAD_FILE,
  GET_PRESIGNED_URL,
  SELECT_UPLOAD_FILE,
  SET_UPLOAD_PROGRESS,
  START_UPLOAD,
  STOP_UPLOAD,
  UPLOAD_FILE,
  UPLOAD_IS_NEW
} from '../config';

export default (state = INITIAL_UPLOAD_STATE, action) => {
  switch (action.type) {
    case SELECT_UPLOAD_FILE:
      return {
        ...state,
        fileObj: action.payload
      }
    case DESELECT_UPLOAD_FILE:
      return INITIAL_UPLOAD_STATE;
    case GET_PRESIGNED_URL:
      return {
        ...state,
        uploadUrl: action.payload.uploadUrl,
        id: action.payload.id
      }
    case START_UPLOAD:
      return {
        ...state,
        isUploading: true
      }
    case STOP_UPLOAD:
      return {
        ...state,
        isUploading: false
      }
    case UPLOAD_FILE:
      return {
        ...state,
        fileUrl: action.payload
      };
    case SET_UPLOAD_PROGRESS:
      return {
        ...state,
        progress: action.payload
      };
    case UPLOAD_IS_NEW:
      return {
        ...state,
        isNew: true
      }
    default:
      return state;
  }
};
