import React from 'react';
import { Form, Button, Dropdown } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form/immutable';
import _ from 'lodash';
import { connect } from 'react-redux';
import { selectSecureContext } from '../selectors';

const typeOptions = _.range(1, 6).map((x) => ({ text: x, value: x }));

const FormDropdown = (field) =>
  <Dropdown
    placeholder="Select Type"
    fluid selection
    options={typeOptions}
    value={field.input.value} //eslint-disable-line
    onChange={(e,d) => field.input.onChange(d.value)} //eslint-disable-line
  />;

class DeployForm extends React.PureComponent {

  componentDidMount() {
    this.props.initialize({ secureContext: this.props.enrollId }); //eslint-disable-line
  }

  submitForm(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label htmlFor="id">EnrollId</label>
          <Field name="secureContext" component="input" type="text" disabled />
        </Form.Field>
        <Form.Field>
          <label htmlFor="id">Path</label>
          <Field name="path" component="input" type="text" placeholder="Enter Path" />
        </Form.Field>
        <Form.Field>
          <label htmlFor="secret">Type</label>
          <Field name="type" component={FormDropdown} />
        </Form.Field>
        <Button onClick={(e) => this.submitForm(e)}>Submit</Button>
      </Form>
    );
  }
}

DeployForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const DeployFormRedux = reduxForm({
  form: 'deploy',  // a unique identifier for this form
})(DeployForm);


export default connect((state) => { //eslint-disable-line
  const enrollId = selectSecureContext()(state);
  return ({
    enrollId,
  });
})(DeployFormRedux);
