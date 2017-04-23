import React from 'react';
import { Table } from 'semantic-ui-react';

const CustomerDetails = (props) =>
  <Table basic="very" celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>First Name</Table.Cell>
        <Table.Cell>Last Name</Table.Cell>
        <Table.Cell>Address</Table.Cell>
        <Table.Cell>City</Table.Cell>
        <Table.Cell>Zip</Table.Cell>
        <Table.Cell>State</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{props.customer.firstName}</Table.Cell>
        <Table.Cell>{props.customer.lastName}</Table.Cell>
        <Table.Cell>{props.customer.address}</Table.Cell>
        <Table.Cell>{props.customer.city}</Table.Cell>
        <Table.Cell>{props.customer.zip}</Table.Cell>
        <Table.Cell>{props.customer.state}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>;

CustomerDetails.propTypes = {
  customer: React.PropTypes.object,
};

export default CustomerDetails;
