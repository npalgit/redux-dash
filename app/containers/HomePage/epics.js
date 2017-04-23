import { UPDATE_SECURECONTEXT, UPDATE_CARDETAILS, UPDATE_INSURANCEDETAILS, UPDATE_CUSTOMERDETAILS, SUBMIT_MANUALCLAIM, SUBMIT_CLAIM } from './constants';
import { updateFormStage, updateInsuranceLogs } from './actions';

export const incFormEpic = (action$) => // $ means observable
  action$.ofType(UPDATE_SECURECONTEXT)
  .mapTo(updateFormStage('registration', 2));

export const incCustomerFormEpic = (action$) => // $ means observable
  action$.ofType(UPDATE_CUSTOMERDETAILS)
  .mapTo(updateFormStage('customer', 2));

export const incCustomerFormToDrivingEpic = (action$) =>
  action$.ofType(UPDATE_INSURANCEDETAILS)
  .mapTo(updateFormStage('customer', 3));

export const carPurchasedEpic = (action$) =>
  action$.ofType(UPDATE_CARDETAILS)
  .mapTo(updateInsuranceLogs('CARDETAILS', 'carDetails'));

export const insurancePurchasedEpic = (action$) =>
  action$.ofType(UPDATE_INSURANCEDETAILS)
  .mapTo(updateInsuranceLogs('INSURANCEDETAILS', 'insuranceDetails'));

export const manualClaimSubmitEpic = (action$) =>
  action$.ofType(SUBMIT_MANUALCLAIM)
  .mapTo(updateInsuranceLogs('MANUALCLAIMDETAILS', 'claimPayload'));

export const autoClaimSubmitEpic = (action$) =>
  action$.ofType(SUBMIT_CLAIM)
  .mapTo(updateInsuranceLogs('AUTOCLAIM', 'claimPayload'));

export default [
  incCustomerFormEpic,
  incCustomerFormToDrivingEpic,
  incFormEpic,
  insurancePurchasedEpic,
  carPurchasedEpic,
  manualClaimSubmitEpic,
  autoClaimSubmitEpic,
];
