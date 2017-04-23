import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');
const selectRegistrationStage = () => createSelector(
  selectHome,
  (homeState) => homeState.get('registrationStage')
);

const selectRegistrationPayload = () => createSelector(
  selectHome,
  (homeState) => homeState.get('registrationFormPayload')
);

const selectDeployFormPayload = () => createSelector(
  selectHome,
  (homeState) => homeState.get('deployFormPayload')
);

const payloadSelecter = (form) => createSelector(
  selectHome,
  (homeState) => homeState.get(`${form}Payload`)
);

const selectChaincodeId = () => createSelector(
  selectHome,
  (homeState) => homeState.get('chaincodeId')
);

const selectSecureContext = () => createSelector(
  selectHome,
  (homeState) => homeState.get('secureContext')
);

const genericSelector = (key) => createSelector(
  selectHome,
  (homeState) => homeState.get(key)
);

export {
  selectHome,
  selectRegistrationStage,
  selectRegistrationPayload,
  selectDeployFormPayload,
  selectChaincodeId,
  payloadSelecter,
  selectSecureContext,
  genericSelector,
};
