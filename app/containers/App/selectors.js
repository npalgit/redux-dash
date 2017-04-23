/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectImages = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('images')
);

const makeSelectLoadingImages = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadingImages')
);

const makeSelectLoadImagesError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loadImageError')
);

const makeSelectLoadImagesSuccess = () => createSelector(
  selectGlobal,
  (globalState) => globalState.getIn('loadImageSuccess')
);

const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectImages,
  makeSelectLoadingImages,
  makeSelectLoadImagesError,
  makeSelectLoadImagesSuccess,
  makeSelectLocationState,
};
