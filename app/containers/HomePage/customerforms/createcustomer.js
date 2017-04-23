import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';

class CreateCustomerForm extends React.PureComponent {

  submitForm(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <Form>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="id">First Name</label>
            <Field name="firstName" component="input" type="text" placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="secret">Last Name</label>
            <Field name="lastName" component="input" type="text" placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="secret">SSN</label>
            <Field name="ssn" component="input" type="text" placeholder="Enroll Secret" />
          </Form.Field>
        </Form.Group>
        <Form.Field>
          <label htmlFor="address">Address</label>
          <Field name="address" component="input" type="text" placeholder="Address" />
        </Form.Field>
        <Form.Group widths="equal">
          <Form.Field>
            <label htmlFor="city">City</label>
            <Field name="city" component="input" type="text" placeholder="City" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="zip">ZIP</label>
            <Field name="zip" component="input" type="text" placeholder="Zip" />
          </Form.Field>
          <Form.Field>
            <label htmlFor="state">State</label>
            <Field name="state" component="input" type="text" placeholder="State" />
          </Form.Field>
        </Form.Group>
        <Button onClick={(e) => this.submitForm(e)}>Submit</Button>
      </Form>
    );
  }
}

CreateCustomerForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default reduxForm({
  form: 'customer',  // a unique identifier for this form
})(CreateCustomerForm);
