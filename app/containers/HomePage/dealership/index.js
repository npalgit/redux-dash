import React from 'react';
import { Form, Button, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';
import { genericSelector } from '../selectors';

const cars = [
  {
    src: 'https://www.tesla.com/tesla_theme/assets/img/modals/model-select-models.png?20160811',
  },
  {
    src: 'https://www.tesla.com/tesla_theme/assets/img/modals/model-select-models.png?20160811',
  },
  {
    src: 'https://www.tesla.com/tesla_theme/assets/img/modals/model-select-models.png?20160811',
  },
  {
    src: 'https://www.tesla.com/tesla_theme/assets/img/modals/model-select-models.png?20160811',
  },
];

class DealershipForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      car: undefined,
    };
  }

  submitForm(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  selectCar(index) {
    this.props.initialize({ //eslint-disable-line
      vin: `VIN${new Date().getTime()}`,
      make: 'Tesla',
      model: 'Model S',
      modelYear: '2015',
    });
    this.setState({
      car: index,
    });
  }

  render() {
    return (
      <div>
        <Image.Group size="small">
          {cars.map((x, i) =>
            <Image
              key={i}
              src={x.src}
              label={{ as: 'a', corner: 'left', icon: 'checkmark', onClick: () => this.selectCar(i), color: this.state.car === i ? 'blue' : 'grey' }}
            />)}
        </Image.Group>
        <Form>
          <Form.Field>
            <label htmlFor="customerid">Customer Id</label>
            <Field name="customerid" component="input" type="text" placeholder="Enter Customer Id" />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="vin">VIN</label>
              <Field name="vin" component="input" type="text" placeholder="Enter Vin" />
            </Form.Field>
            <Form.Field>
              <label htmlFor="make">Make</label>
              <Field name="make" component="input" type="text" placeholder="Enter Make" />
            </Form.Field>
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field>
              <label htmlFor="model">Model</label>
              <Field name="model" component="input" type="text" placeholder="Enter Vin" />
            </Form.Field>
            <Form.Field>
              <label htmlFor="modelYear">Model Year</label>
              <Field name="modelYear" component="input" type="text" placeholder="Select Car" />
            </Form.Field>
          </Form.Group>
          <Button onClick={(e) => this.submitForm(e)}>Submit</Button>
        </Form>
      </div>
    );
  }
}

DealershipForm.propTypes = {
  handleSubmit: React.PropTypes.func,
};

const DealershipFormRedux = reduxForm({
  form: 'dealership',  // a unique identifier for this form
})(DealershipForm);

export default connect((state) => { //eslint-disable-line
  const customerDetails = genericSelector('customerDetails')(state);
  return ({
    customerDetails,
  });
})(DealershipFormRedux);
