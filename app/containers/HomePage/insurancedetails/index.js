import React from 'react';
import { Table } from 'semantic-ui-react';

const InsuranceDetails = (props) =>
  <Table basic="very" celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Customer Id</Table.Cell>
        <Table.Cell>Policy No</Table.Cell>
        <Table.Cell>Policy Type</Table.Cell>
        <Table.Cell>Car Make</Table.Cell>
        <Table.Cell>Car Model</Table.Cell>
        <Table.Cell>Car Model Year</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{props.customerDetails.ssn}</Table.Cell>
        <Table.Cell>{props.insuranceDetails.policyid}</Table.Cell>
        <Table.Cell>{props.insuranceDetails.policyType}</Table.Cell>
        <Table.Cell>{props.carDetails.make}</Table.Cell>
        <Table.Cell>{props.carDetails.model}</Table.Cell>
        <Table.Cell>{props.carDetails.modelYear}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>;

InsuranceDetails.propTypes = {
  customerDetails: React.PropTypes.object,
  insuranceDetails: React.PropTypes.object,
  carDetails: React.PropTypes.object,
};

export default InsuranceDetails;
