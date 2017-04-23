import React from 'react';
import { Table } from 'semantic-ui-react';

const ClaimDetails = (props) =>
  <Table basic="very" celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Policy No</Table.HeaderCell>
        <Table.HeaderCell>Status Date</Table.HeaderCell>
        <Table.HeaderCell>Vin</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {props.claimDetails.map((x, i) =>
        <Table.Row key={i}>
          <Table.Cell>{x.policyNumber}</Table.Cell>
          <Table.Cell>{x.statusDate && x.statusDate.toDateString()}</Table.Cell>
          <Table.Cell>{x.vin}</Table.Cell>
          <Table.Cell>{x.notes}</Table.Cell>
        </Table.Row>
      )}
    </Table.Body>
  </Table>;

ClaimDetails.propTypes = {
  claimDetails: React.PropTypes.array,
};

export default ClaimDetails;
