import React from 'react';
import { Form, Button, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import { connect } from 'react-redux';
import { genericSelector } from '../selectors';
class ManualClaimForm extends React.PureComponent {

  componentDidMount() {
    this.props.initialize({ //eslint-disable-line
      policyNumber: this.props.policyNumber, //eslint-disable-line
      customerid: this.props.customerId, //eslint-disable-line
      statusDate: new Date(),
      vin: this.props.vin, //eslint-disable-line
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }


  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="id">Customer Id</label>
            <Field name="customerid" component="input" type="text" placeholder="Customer Id" />
            {!this.props.customerId && <Label pointing>Fill Create Customer Form to get CustomerId</Label>}
          </Form.Field>
          <Form.Field>
            <label htmlFor="policyNumber">Policy Number</label>
            <Field name="policyNumber" component="input" type="text" placeholder="Policy Number" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="statusDate">Status Date</label>
            <Field name="statusDate" component="input" type="text" placeholder="Status Date" />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label htmlFor="vin">VIN</label>
          <Field name="vin" component="input" type="text" placeholder="VIN" />
          {!this.props.vin && <Label pointing>Fill Dealership form to get VIN</Label>}
        </Form.Field>
        <Form.Field>
          <label htmlFor="notes">Notes</label>
          <Field name="notes" component="input" type="text" placeholder="Notes" />
        </Form.Field>
        <Button onClick={(e) => this.submitForm(e)}>Submit</Button>
      </Form>
    );
  }
}

ManualClaimForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  customerId: React.PropTypes.string,
  vin: React.PropTypes.string,
};

const ManualClaimFormRedux = reduxForm({
  form: 'manualClaim', // a unique identifier for this form
})(ManualClaimForm);

export default connect((state) => { //eslint-disable-line
  const policyNumber = genericSelector('insuranceDetails')(state).policyid;
  const customerId = genericSelector('customerDetails')(state).ssn;
  const vin = genericSelector('carDetails')(state).vin;
  return ({
    policyNumber,
    customerId,
    vin,
  });
})(ManualClaimFormRedux);
