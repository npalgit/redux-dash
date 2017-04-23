import { UPDATE_STAGE, SUBMIT_REGISTRATIONFORM, SUBMIT_DEPLOYFORM, ACTIVATE_ALL_FORMS, SUBMIT_CREATE_CUSTOMER, UPDATE_SECURECONTEXT, UPDATE_CUSTOMERDETAILS, SUBMIT_DEALERSHIPFORM, UPDATE_CARDETAILS, SUBMIT_INSURANCEFORM, UPDATE_INSURANCEDETAILS, SUBMIT_CARACTIONS, UPDATE_LATESTCARACTION, SUBMIT_CLAIM, GET_DETAILS, UPDATE_INSURANCELOGS, SUBMIT_CRASH, SUBMIT_MANUALCLAIM } from './constants';

export function updateFormStage(formName, stage) {
  return {
    type: UPDATE_STAGE,
    form: formName,
    stage,
  };
}

export function updateSecureContext(secureContext) {
  return {
    type: UPDATE_SECURECONTEXT,
    secureContext,
  };
}

export function updateCustomerDetails(customerDetails) {
  return {
    type: UPDATE_CUSTOMERDETAILS,
    customerDetails,
  };
}

export function updateCarDetails(carDetails) {
  return {
    type: UPDATE_CARDETAILS,
    carDetails,
  };
}

export function updateInsuranceDetails(insuranceDetails) {
  return {
    type: UPDATE_INSURANCEDETAILS,
    insuranceDetails,
  };
}

export function updateLatestCarAction(carAction) {
  return {
    type: UPDATE_LATESTCARACTION,
    carAction,
  };
}

export function submitClaim(payload, isManual) {
  if (isManual === 'MANUAL') {
    return {
      type: SUBMIT_MANUALCLAIM,
      payload,
    };
  }

  return {
    type: SUBMIT_CLAIM,
    payload,
  };
}

export function getDetails(payload) {
  return {
    type: GET_DETAILS,
    payload,
  };
}

export function submitRegistrationForm(payload) {
  return {
    type: SUBMIT_REGISTRATIONFORM,
    payload,
  };
}

export function submitDeployForm(payload) {
  return {
    type: SUBMIT_DEPLOYFORM,
    payload,
  };
}

export function submitCarActions(payload) {
  return {
    type: SUBMIT_CARACTIONS,
    payload,
  };
}

export function submitCrash(payload) {
  return {
    type: SUBMIT_CRASH,
    payload,
  };
}

export function submitCreateCustomerForm(payload) {
  return {
    type: SUBMIT_CREATE_CUSTOMER,
    payload,
  };
}

export function submitDealershipForm(payload) {
  return {
    type: SUBMIT_DEALERSHIPFORM,
    payload,
  };
}

export function submitInsuranceForm(payload) {
  return {
    type: SUBMIT_INSURANCEFORM,
    payload,
  };
}

export function activateAllForms(chaincodeId) {
  return {
    type: ACTIVATE_ALL_FORMS,
    chaincodeId,
  };
}

export function updateInsuranceLogs(logType, log) {
  return {
    type: UPDATE_INSURANCELOGS,
    logType,
    log,
  };
}
