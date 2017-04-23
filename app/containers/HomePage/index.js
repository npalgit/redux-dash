import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Segment, Grid, Menu } from 'semantic-ui-react';
import styled from 'styled-components';
import { selectRegistrationStage, selectChaincodeId, genericSelector } from './selectors';
import { submitRegistrationForm, submitDeployForm, submitCreateCustomerForm, submitDealershipForm, submitInsuranceForm, updateFormStage, submitCarActions, submitClaim, getDetails, submitCrash } from './actions';
import CreateDraggable from './draggablewrapper';
import Register from './registerforms/register';
import Deploy from './registerforms/deploy';
import CreateCustomerForm from './customerforms/createcustomer';
import Kyc from './kyc';
import Dealership from './dealership';
import InsuranceForm from './insuranceforms';
import DrivingForm from './customerforms/autoclaim';
import ManualClaimForm from './customerforms/claimform';
import CarDetails from './kyc/cardetails';
import InsuranceDetailsTable from './kyc/insurancedetails';
import ClaimDetails from './kyc/claimdetails';
import { emptyObjectCheck } from './dynamos'; //eslint-disable-line
import Notifier from './Notifier';

const StyledSegment = styled(Segment)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-grow: 2;
`;

export class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <StyledSegment vertical attached id="boundries">
          <Grid padded>
            <Grid.Row>
              <Grid.Column width={8}>
                <CreateDraggable color="red" header="Register Client" icon="add user">
                  <Menu pointing secondary>
                    <Menu.Item name="Register Client" active={this.props.registerFormStage === 1} />
                    <Menu.Item name="Deploy Blockchain" active={this.props.registerFormStage === 2} />
                  </Menu>
                  {this.props.registerFormStage === 1 && <Register onSubmit={(payload) => this.props.submitRegistrationForm(payload)} />}
                  {this.props.registerFormStage === 2 && <Deploy onSubmit={(payload) => this.props.submitDeployForm(payload)} />}
                </CreateDraggable>
              </Grid.Column>
              <Grid.Column width={8}>
                <CreateDraggable
                  color="teal"
                  disabled={!this.props.chaincodeId}
                  header="Create Customer"
                  disableMessage="Deploy Chaincode First"
                  icon="user"
                >
                  <Menu pointing secondary>
                    <Menu.Item name="Register" active={this.props.customerStage === 1} onClick={() => this.props.updateFormStage('customer', 1)} />
                    <Menu.Item name="Purchase Insurance" active={this.props.customerStage === 2} onClick={() => this.props.updateFormStage('customer', 2)} />
                    <Menu.Item name="Drive Car" active={this.props.customerStage === 3} onClick={() => this.props.updateFormStage('customer', 3)} />
                    <Menu.Item name="Submit Claim" active={this.props.customerStage === 4} onClick={() => this.props.updateFormStage('customer', 4)} />
                  </Menu>
                  {this.props.customerStage === 1 && <CreateCustomerForm onSubmit={(payload) => this.props.submitCreateCustomerForm(payload)} />}
                  {this.props.customerStage === 2 && <InsuranceForm onSubmit={(payload) => this.props.submitInsuranceForm(payload)} />}
                  {this.props.customerStage === 3 &&
                    <DrivingForm
                      emitEvent={(payload) => this.props.submitCarActions(payload)}
                      emitCrashEvent={(payload) => this.props.submitCrash(payload)}
                      autoClaim={(payload) => this.props.submitClaim(payload)}
                      customerId={this.props.customerDetails.ssn}
                      policyNumber={this.props.insuranceDetails.policyid}
                      vin={this.props.carDetails.vin}
                    />
                  }
                  {this.props.customerStage === 4 && <ManualClaimForm onSubmit={(payload) => this.props.submitClaim(payload, 'MANUAL')} />}
                </CreateDraggable>
              </Grid.Column>
              <Grid.Column width={8}>
                <CreateDraggable color="blue" disabled={!this.props.chaincodeId} header="Know Your Customer" disableMessage="Deploy Chaincode First" icon="address book outline">
                  <Kyc getDetails={(customerId) => this.props.getDetails(customerId)} />
                </CreateDraggable>
              </Grid.Column>
              <Grid.Column width={8}>
                <CreateDraggable color="violet" header="Dealership Details" disabled={!this.props.chaincodeId} disableMessage="Deploy Chaincode First" icon="car">
                  <Dealership onSubmit={(payload) => this.props.submitDealershipForm(payload)} />
                </CreateDraggable>
              </Grid.Column>
              {/* <Grid.Column width={8}>
                <CreateDraggable color="green" header="Buy Insurance" disabled={!this.props.chaincodeId} disableMessage="Deploy Chaincode First" icon="shopping bag">
                  <InsuranceForm onSubmit={(payload) => this.props.submitInsuranceForm(payload)} />
                </CreateDraggable>
              </Grid.Column> */}
              <Grid.Column width={8}>
                <CreateDraggable color="yellow" header="Insurance Details" disabled={!this.props.chaincodeId} disableMessage="Deploy Chaincode First" icon="browser">
                  {this.props.logType === 'CARDETAILS' && <Notifier message="Car Purchased" customerId={this.props.insuranceLogs.customerid}><CarDetails cardetails={this.props.insuranceLogs} /></Notifier>}
                  {this.props.logType === 'INSURANCEDETAILS' && <Notifier message="Insurance Purchased" customerId={this.props.insuranceLogs.customerid}><InsuranceDetailsTable insuranceDetails={this.props.insuranceLogs} /></Notifier>}
                  {this.props.logType === 'MANUALCLAIMDETAILS' && <Notifier message="Possible Fraud Claim" customerId={this.props.insuranceLogs.customerid}><ClaimDetails claimDetails={[this.props.insuranceLogs]} /></Notifier>}
                  {this.props.logType === 'AUTOCLAIM' && <Notifier message="Automatic Claim" customerId={this.props.insuranceLogs.customerid}><ClaimDetails claimDetails={[this.props.insuranceLogs]} /></Notifier>}
                  {this.props.logType === '' && <span>Nothing To show</span>}
                </CreateDraggable>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </StyledSegment>
      </div>
    );
  }
}

HomePage.propTypes = {
  customerStage: React.PropTypes.number,
  registerFormStage: React.PropTypes.number,
  submitRegistrationForm: React.PropTypes.func,
  submitDeployForm: React.PropTypes.func,
  chaincodeId: React.PropTypes.string,
  submitCreateCustomerForm: React.PropTypes.func,
  customerDetails: React.PropTypes.object, //eslint-disable-line
  insuranceDetails: React.PropTypes.object,//eslint-disable-line
  carDetails: React.PropTypes.object,//eslint-disable-line
  submitDealershipForm: React.PropTypes.func,
  submitInsuranceForm: React.PropTypes.func,
  updateFormStage: React.PropTypes.func,
  submitCarActions: React.PropTypes.func,
  submitClaim: React.PropTypes.func,
  getDetails: React.PropTypes.func,
  insuranceLogs: React.PropTypes.object,
  logType: React.PropTypes.string,
  submitCrash: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) { //eslint-disable-line
  return {
    submitRegistrationForm: (payload) => dispatch(submitRegistrationForm(payload)),
    submitDeployForm: (payload) => dispatch(submitDeployForm(payload)),
    submitCreateCustomerForm: (payload) => dispatch(submitCreateCustomerForm(payload)),
    submitDealershipForm: (payload) => dispatch(submitDealershipForm(payload)),
    submitInsuranceForm: (payload) => dispatch(submitInsuranceForm(payload)),
    updateFormStage: (formName, stage) => dispatch(updateFormStage(formName, stage)),
    submitCarActions: (payload) => dispatch(submitCarActions(payload)),
    submitClaim: (payload, isManual) => dispatch(submitClaim(payload, isManual)),
    getDetails: (customerId) => dispatch(getDetails(customerId)),
    submitCrash: (payload) => dispatch(submitCrash(payload)),
  };
}

const mapStateToProps = createStructuredSelector({
  registerFormStage: selectRegistrationStage(),
  chaincodeId: selectChaincodeId(),
  customerDetails: genericSelector('customerDetails'),
  insuranceDetails: genericSelector('insuranceDetails'),
  carDetails: genericSelector('carDetails'),
  customerStage: genericSelector('customerStage'),
  insuranceLogs: genericSelector('insuranceLog'),
  logType: genericSelector('logType'),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
