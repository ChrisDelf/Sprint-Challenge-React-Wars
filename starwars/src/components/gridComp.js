import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import GridCard from './gridCard';






function GridComp(props) {
  const {starWarsData} = props;
  console.log("Data in Grid", props)
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell singleLine>Name</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
          <Table.HeaderCell>BirthDay</Table.HeaderCell>
          <Table.HeaderCell>Year of Creation</Table.HeaderCell>
          <Table.HeaderCell>Comments</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <GridCard />
      </Table.Body>
    </Table>
  );
}

export default GridComp;
