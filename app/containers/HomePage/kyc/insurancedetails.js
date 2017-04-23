import React from 'react';
import { Table } from 'semantic-ui-react';

const InsuranceDetailsTable = (props) =>
  <Table basic="very" celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Policy No</Table.Cell>
        <Table.Cell>Policy Type</Table.Cell>
        <Table.Cell>Valid From</Table.Cell>
        <Table.Cell>Valid To</Table.Cell>
        <Table.Cell>Associated Vin</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{props.insuranceDetails.policyid}</Table.Cell>
        <Table.Cell>{props.insuranceDetails.policyType}</Table.Cell>
        <Table.Cell>{props.insuranceDetails.validFrom && props.insuranceDetails.validFrom.toDateString()}</Table.Cell>
        <Table.Cell>{props.insuranceDetails.validFrom && props.insuranceDetails.validTo.toDateString()}</Table.Cell>
        <Table.Cell>{props.insuranceDetails.associatedVIN}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>;

InsuranceDetailsTable.propTypes = {
  insuranceDetails: React.PropTypes.object,
};

export default InsuranceDetailsTable;
