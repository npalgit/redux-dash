// Global Reducer
import { fromJS } from 'immutable';

import {
  LOAD_IMAGES_SUCCESS,
  LOAD_ANOTHER_FORM,
  LOAD_IMAGES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  images: [],
  loadImageSuccess: false,
  loadImageError: false,
  loadingImages: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ANOTHER_FORM:
      return state.set('loadAnotherForm', true);
    case LOAD_IMAGES_SUCCESS:
      return state.set('images', action.images).set('loadingImages', false).set('loadImageSuccess', true);
    case LOAD_IMAGES_ERROR:
      return state.set('loadImageError', true).set('loadingImages', false);
    default:
      return state;
  }
}

export default appReducer;
