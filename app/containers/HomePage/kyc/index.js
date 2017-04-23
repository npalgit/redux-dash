import React, { Component } from 'react';
import { Input, Menu, Button } from 'semantic-ui-react';
import CustomerDetails from './customerdetails';
import InsuranceDetails from './insurancedetails';
import ClaimDetails from './claimdetails';
import CarDetails from './cardetails';

const tabs = [
  'Customer Details',
  'Car Details',
  'Insurance Details',
  'Claim Details',
];

class Kyc extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      tab: 0,
      customerId: '',
    };
  }

  updateText(customerId) {
    this.setState({
      customerId,
    });
  }

  changeTab(tab) {
    this.setState({
      tab,
    });
  }

  render() {
    return (
      <div>
        <Input placeholder="Enter Customer Id" style={{ padding: '5px' }} onChange={(e) => this.updateText(e.target.value)} />
        <Button primary onClick={() => this.props.getDetails({ customerid: this.state.customerId })}>Search</Button>
        <Menu pointing secondary>
          {tabs.map((x, i) =>
            <Menu.Item key={i} name={x} active={this.state.tab === i} onClick={() => this.changeTab(i)} />
          )}
        </Menu>
        {this.state.tab === 0 && <CustomerDetails customer={{}} />}
        {this.state.tab === 1 && <CarDetails cardetails={{}} />}
        {this.state.tab === 2 && <InsuranceDetails insuranceDetails={{}} />}
        {this.state.tab === 3 && <ClaimDetails claimDetails={[{}, {}]} />}
      </div>
    );
  }
}

Kyc.propTypes = {
  getDetails: React.PropTypes.func,
};

export default Kyc;
