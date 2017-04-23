import { fromJS } from 'immutable';

import { STAGE_INC, UPDATE_STAGE, SUBMIT_REGISTRATIONFORM, SUBMIT_DEPLOYFORM, ACTIVATE_ALL_FORMS, SUBMIT_CREATE_CUSTOMER, UPDATE_SECURECONTEXT, UPDATE_CUSTOMERDETAILS, SUBMIT_DEALERSHIPFORM, UPDATE_CARDETAILS, SUBMIT_INSURANCEFORM, UPDATE_INSURANCEDETAILS, SUBMIT_CARACTIONS, UPDATE_LATESTCARACTION, SUBMIT_CLAIM, GET_DETAILS, UPDATE_INSURANCELOGS, SUBMIT_CRASH, SUBMIT_MANUALCLAIM } from './constants';

// The initial state of the App
const initialState = fromJS({
  registrationStage: 1,
  customerStage: 1,
  dealershipStage: 1,
  insuranceStage: 1,
  registrationFormPayload: {},
  deployFormPayload: {},
  chaincodeId: undefined,
  createCustomerPayload: {},
  secureContext: undefined,
  customerDetails: {},
  dealershipFormPayload: {},
  carDetails: {},
  insuranceFormPayload: {},
  insuranceDetails: {},
  carAction: {},
  latestCarAction: {},
  claimPayload: {},
  claims: [],
  customerId: {},
  logType: '',
  insuranceLog: {},
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case STAGE_INC:
      return state.set(`${action.form}Stage`, state.get(`${action.form}Stage`) + 1);
    case UPDATE_STAGE:
      return state.set(`${action.form}Stage`, action.stage);
    case SUBMIT_REGISTRATIONFORM:
      return state.set('registrationFormPayload', action.payload);
    case UPDATE_SECURECONTEXT:
      return state.set('secureContext', action.secureContext);
    case SUBMIT_DEPLOYFORM:
      return state.set('deployFormPayload', action.payload);
    case SUBMIT_DEALERSHIPFORM:
      return state.set('dealershipFormPayload', action.payload);
    case ACTIVATE_ALL_FORMS:
      return state.set('chaincodeId', action.chaincodeId);
    case SUBMIT_CREATE_CUSTOMER:
      return state.set('createCustomerPayload', action.payload);
    case SUBMIT_CARACTIONS:
      return state.set('carAction', action.payload);
    case SUBMIT_CRASH:
      return state.set('carAction', action.payload);
    case SUBMIT_CLAIM:
      return state.set('claimPayload', action.payload);
    case SUBMIT_MANUALCLAIM:
      return state.set('claimPayload', action.payload);
    case GET_DETAILS:
      return state.set('customerId', action.payload);
    case UPDATE_LATESTCARACTION:
      return state.set('latestCarAction', action.carAction);
    case UPDATE_CUSTOMERDETAILS:
      return state.set('customerDetails', action.customerDetails);
    case SUBMIT_INSURANCEFORM:
      return state.set('insuranceFormPayload', action.payload);
    case UPDATE_INSURANCEDETAILS:
      return state.set('insuranceDetails', action.insuranceDetails);
    case UPDATE_CARDETAILS:
      return state.set('carDetails', action.carDetails);
    case UPDATE_INSURANCELOGS:
      return state.set('logType', action.logType).set('insuranceLog', state.get(action.log));
    default:
      return state;
  }
}

export default homeReducer;
