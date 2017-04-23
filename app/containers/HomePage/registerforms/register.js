import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';

class RegisterForm extends React.PureComponent {

  submitForm(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="id">Enroll Id</label>
          <Field name="enrollId" component="input" type="text" placeholder="Enroll Id" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="secret">Enroll Secret</label>
          <Field name="enrollSecret" component="input" type="text" placeholder="Enroll Secret" />
        </Form.Field>
        <Button onClick={(e) => this.submitForm(e)}>Submit</Button>
      </Form>
    );
  }
}

RegisterForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

export default reduxForm({
  form: 'register',  // a unique identifier for this form
})(RegisterForm);
