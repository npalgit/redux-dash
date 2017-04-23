import { LOAD_ANOTHER_FORM, LOAD_IMAGES_SUCCESS, LOAD_IMAGES_ERROR } from './constants';


export function loadAnotherForm() {
  return {
    type: LOAD_ANOTHER_FORM,
  };
}

export function imageLoadingSuccess(images) {
  return {
    type: LOAD_IMAGES_SUCCESS,
    images,
  };
}

export function imageLoadingError(error) {
  return {
    type: LOAD_IMAGES_ERROR,
    error,
  };
}
