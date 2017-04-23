import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects'; //eslint-disable-line
import { LOCATION_CHANGE } from 'react-router-redux';
// import request from 'utils/request';
import { selectRegistrationStage,selectRegistrationPayload, selectDeployFormPayload, payloadSelecter, selectChaincodeId, selectSecureContext, genericSelector } from 'containers/HomePage/selectors'; //eslint-disable-line
import { SUBMIT_REGISTRATIONFORM, SUBMIT_DEPLOYFORM, SUBMIT_CREATE_CUSTOMER, SUBMIT_DEALERSHIPFORM, SUBMIT_INSURANCEFORM, SUBMIT_CARACTIONS, SUBMIT_CLAIM, GET_DETAILS, SUBMIT_CRASH, SUBMIT_MANUALCLAIM } from './constants';
import { updateSecureContext, activateAllForms, updateCustomerDetails, updateCarDetails, updateInsuranceDetails, updateLatestCarAction } from './actions';
import { deployTransform, createCustomerTransform, createDealershipTransform, createInsuranceTransform, createCarActionTransform, requestTransform } from './transformers';
/**
 * Github repos request/response handler
 */
export function* submitRegistrationForm() {
  const registration = yield select(selectRegistrationPayload());
  console.log(registration);
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  yield put(updateSecureContext(registration.enrollId));
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

export function* submitDeployForm() {
  const deploy = yield select(selectDeployFormPayload());
  // const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&camera=${camera}&page=1&api_key=DEMO_KEY`;
  console.log(deployTransform(deploy));
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  yield put(activateAllForms('123456789')); // Put ChaincodeId here
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

export function* submitCreateCustomerForm() {
  const customer = yield select(payloadSelecter('createCustomer'));
  const secureContext = yield select(selectSecureContext());
  const chaincodeId = yield select(selectChaincodeId());
  // const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&camera=${camera}&page=1&api_key=DEMO_KEY`;
  console.log(createCustomerTransform(customer, chaincodeId, secureContext));
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  yield put(updateCustomerDetails(customer)); // Put ChaincodeId here
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

export function* submitDealershipForm() {
  const dealership = yield select(payloadSelecter('dealershipForm'));
  const secureContext = yield select(selectSecureContext());
  const chaincodeId = yield select(selectChaincodeId());
  // const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&camera=${camera}&page=1&api_key=DEMO_KEY`;
  console.log(createDealershipTransform(dealership, chaincodeId, secureContext));
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  yield put(updateCarDetails(dealership)); // Put ChaincodeId here
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

export function* submitInsuranceForm() {
  const insurance = yield select(payloadSelecter('insuranceForm'));
  const secureContext = yield select(selectSecureContext());
  const chaincodeId = yield select(selectChaincodeId());
  // const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&camera=${camera}&page=1&api_key=DEMO_KEY`;
  console.log(createInsuranceTransform(insurance, chaincodeId, secureContext));
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  yield put(updateInsuranceDetails(insurance)); // Put ChaincodeId here
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

export function* submitCarAction() {
  const carAction = yield select(genericSelector('carAction'));
  const secureContext = yield select(selectSecureContext());
  const chaincodeId = yield select(selectChaincodeId());
  // const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&camera=${camera}&page=1&api_key=DEMO_KEY`;
  console.log(createCarActionTransform(carAction, chaincodeId, secureContext));
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  yield put(updateLatestCarAction(carAction)); // Put ChaincodeId here
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

export function* submitClaim() {
  const claim = yield select(payloadSelecter('claim'));
  const secureContext = yield select(selectSecureContext());
  const chaincodeId = yield select(selectChaincodeId());
  // const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&camera=${camera}&page=1&api_key=DEMO_KEY`;
  console.log(requestTransform(claim, chaincodeId, secureContext, 'createClaim'));
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  // yield put(updateClaim(claim)); // Put ChaincodeId here
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

export function* getDetails() {
  const customerId = yield select(genericSelector('customerId'));
  const secureContext = yield select(selectSecureContext());
  const chaincodeId = yield select(selectChaincodeId());
  // const requestURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=50&camera=${camera}&page=1&api_key=DEMO_KEY`;
  console.log(requestTransform(customerId, chaincodeId, secureContext, 'getCustomerDetails'));
  // try {
  //   // Call our request helper (see 'utils/request')
  //   const images = yield call(request, requestURL);
  // yield put(updateKyc(customerDetails));
  // } catch (err) {
  //   yield put(imageLoadingError(err));
  // }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* rootWatcher() {
  const watcher = yield takeLatest(SUBMIT_REGISTRATIONFORM, submitRegistrationForm);
  const DeployFormWatcher = yield takeLatest(SUBMIT_DEPLOYFORM, submitDeployForm);
  const CreateCustomerFormWatcher = yield takeLatest(SUBMIT_CREATE_CUSTOMER, submitCreateCustomerForm);
  const DealershipFormWatcher = yield takeLatest(SUBMIT_DEALERSHIPFORM, submitDealershipForm);
  const InsuranceFormWatcher = yield takeLatest(SUBMIT_INSURANCEFORM, submitInsuranceForm);
  const ActionWatcher = yield takeLatest(SUBMIT_CARACTIONS, submitCarAction);
  const CrashWatcher = yield takeLatest(SUBMIT_CRASH, submitCarAction);
  const ClaimWatcher = yield takeLatest(SUBMIT_CLAIM, submitClaim);
  const ManualClaimWatcher = yield takeLatest(SUBMIT_MANUALCLAIM, submitClaim);
  const CustomerDetailsWatcher = yield takeLatest(GET_DETAILS, getDetails);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
  yield cancel(DeployFormWatcher);
  yield cancel(CreateCustomerFormWatcher);
  yield cancel(DealershipFormWatcher);
  yield cancel(InsuranceFormWatcher);
  yield cancel(ActionWatcher);
  yield cancel(CrashWatcher);
  yield cancel(ClaimWatcher);
  yield cancel(ManualClaimWatcher);
  yield cancel(CustomerDetailsWatcher);
}
//
// // Bootstrap sagas
export default [
  rootWatcher,
];
