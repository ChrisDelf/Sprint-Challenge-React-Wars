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
          <Table.HeaderCell>Birth Year</Table.HeaderCell>
          <Table.HeaderCell>Vehicles</Table.HeaderCell>
          <Table.HeaderCell>Home World</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

    <Table.Body>
    {starWarsData.map((item, index) => (
        <GridCard key={index} name={item}/>
       ))}

      </Table.Body>
    </Table>
  );
}

export default GridComp;
