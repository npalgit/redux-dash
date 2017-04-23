import React from 'react';
import { connect } from 'react-redux';
import { Form, Button, Dropdown, Label } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import { genericSelector } from '../selectors';

const policies = [
  {
    text: 'Type 1',
    value: 'Type 1',
  }, {
    text: 'Type 2',
    value: 'Type 2',
  }, {
    text: 'Type 3',
    value: 'Type 3',
  },
];

const FormDropdown = (field) =>
  <Dropdown
    placeholder="Select Type"
    fluid selection
    options={policies}
    value={field.input.value} //eslint-disable-line
    onChange={(e,d) => field.input.onChange(d.value)} //eslint-disable-line
  />;


class InsuranceForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      car: undefined,
    };
  }

  componentDidMount() {
    this.props.initialize({ //eslint-disable-line
      customerId: this.props.customerId, //eslint-disable-line
      associatedVIN: this.props.vin, //eslint-disable-line
    });
  }

  submitForm(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  initInsuranceForm() {
    this.props.initialize({ //eslint-disable-line
      policyid: `AUTO${new Date().getTime()}`,
      validFrom: new Date(),
      validTo: new Date(new Date().setMonth(new Date().getMonth() + 6)),
      customerId: this.props.customerId, //eslint-disable-line
      associatedVIN: this.props.vin, //eslint-disable-line
    });
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="customerId">Customer Id</label>
          <Field name="customerId" component="input" type="text" placeholder="Enter Customer Id" />
          {!this.props.customerId && <Label pointing>Fill Create Customer Form to get CustomerId</Label>}
        </Form.Field>
        <Form.Field>
          <label htmlFor="policyType">Policy Type</label>
          <Field name="policyType" component={FormDropdown} onChange={() => this.initInsuranceForm()} />
        </Form.Field>
        <Form.Field>
          <label htmlFor="policyid">Policy Id</label>
          <Field name="policyid" component="input" type="text" placeholder="Select Policy Type" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="validFrom">Valid From</label>
            <Field name="validFrom" component="input" type="text" placeholder="Select Policy Type" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="validTo">Valid To</label>
            <Field name="validTo" component="input" type="text" placeholder="Select Policy Type" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="associatedVIN">Associated VIN</label>
            <Field name="associatedVIN" component="input" type="text" placeholder="Your VIN will be prefilled here" />
            {!this.props.vin && <Label pointing>Fill Dealership form to get VIN</Label>}
          </Form.Field>
        </Form.Group>
        <Button onClick={(e) => this.submitForm(e)}>Submit</Button>
      </Form>
    );
  }
}

InsuranceForm.propTypes = {
  handleSubmit: React.PropTypes.func,
  vin: React.PropTypes.string,
  customerId: React.PropTypes.string,
};

const InsuranceFormRedux = reduxForm({
  form: 'insuranceForm',  // a unique identifier for this form
})(InsuranceForm);

export default connect((state) => { //eslint-disable-line
  const vin = genericSelector('carDetails')(state).vin;
  const customerId = genericSelector('customerDetails')(state).ssn;
  return ({
    vin,
    customerId,
  });
})(InsuranceFormRedux);
