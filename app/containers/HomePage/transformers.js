export const deployTransform = (payload) => ({
  jsonrpc: '2.0',
  method: 'deploy',
  params: {
    type: payload.type,
    chaincodeID: {
      path: payload.path,
    },
    ctorMsg: {
      args: ['init', 'a'],
    },
    secureContext: payload.secureContext,
  },
  id: 1,
});

export const createCustomerTransform = (payload, chaincodeId, secureContext) => ({
  jsonrpc: '2.0',
  method: 'invoke',
  params: {
    type: 4,
    chaincodeID: {
      name: chaincodeId,
    },
    ctorMsg: {
      args: ['createCustomer', JSON.stringify(payload)],
    },
    secureContext,
  },
  id: 1,
});

export const createDealershipTransform = (payload, chaincodeId, secureContext) => ({
  jsonrpc: '2.0',
  method: 'invoke',
  params: {
    type: 4,
    chaincodeID: {
      name: chaincodeId,
    },
    ctorMsg: {
      args: ['addAutomobileDetails', JSON.stringify(payload)],
    },
    secureContext,
  },
  id: 1,
});

export const createInsuranceTransform = (payload, chaincodeId, secureContext) => ({
  jsonrpc: '2.0',
  method: 'invoke',
  params: {
    type: 4,
    chaincodeID: {
      name: chaincodeId,
    },
    ctorMsg: {
      args: ['addInsuranceDetails', JSON.stringify(payload)],
    },
    secureContext,
  },
  id: 1,
});

export const createCarActionTransform = (payload, chaincodeId, secureContext) => ({
  jsonrpc: '2.0',
  method: 'invoke',
  params: {
    type: 4,
    chaincodeID: {
      name: chaincodeId,
    },
    ctorMsg: {
      args: ['automobileEvent', JSON.stringify(payload)],
    },
    secureContext,
  },
  id: 1,
});


export const requestTransform = (payload, chaincodeId, secureContext, event) => ({
  jsonrpc: '2.0',
  method: 'invoke',
  params: {
    type: 4,
    chaincodeID: {
      name: chaincodeId,
    },
    ctorMsg: {
      args: [event, JSON.stringify(payload)],
    },
    secureContext,
  },
  id: 1,
});
