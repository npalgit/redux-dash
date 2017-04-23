import React from 'react';
import { Table } from 'semantic-ui-react';

const CarDetails = (props) =>
  <Table basic="very" celled>
    <Table.Body>
      <Table.Row>
        <Table.Cell>Vin</Table.Cell>
        <Table.Cell>Make</Table.Cell>
        <Table.Cell>Model</Table.Cell>
        <Table.Cell>Model Year</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>{props.cardetails.vin}</Table.Cell>
        <Table.Cell>{props.cardetails.make}</Table.Cell>
        <Table.Cell>{props.cardetails.model}</Table.Cell>
        <Table.Cell>{props.cardetails.modelYear}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>;

CarDetails.propTypes = {
  cardetails: React.PropTypes.object,
};

export default CarDetails;
