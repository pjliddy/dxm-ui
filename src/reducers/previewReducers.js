import { INITIAL_PREVIEW_STATE } from '../config';
import { PREVIEW_HTML, PREVIEW_JSON } from '../config';

export default (state = INITIAL_PREVIEW_STATE, action) => {
  switch (action.type) {
    case PREVIEW_HTML:
      return state;
    case PREVIEW_JSON:
        return state;
    default:
      return state;
  }
};
