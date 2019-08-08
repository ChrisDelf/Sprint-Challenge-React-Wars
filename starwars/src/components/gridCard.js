import React from 'react';
import { Header, Table, Rating } from 'semantic-ui-react';

function GridCard(props) {
  console.log('In Card Comp', props);

  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h2" textAlign="center">
          {props.name.name}
        </Header>
      </Table.Cell>
      <Table.Cell>Birth Year: {props.name.birth_year}</Table.Cell>
      <Table.Cell>PLACEHOLDER</Table.Cell>
      <Table.Cell>PLACEHOLDER</Table.Cell>
      <Table.Cell>
        <ul>
          <li>Eye color: {props.name.eye_color}</li>
          <li>Haircolor: {props.name.hair_color}</li>
          <li>Height: {props.name.height}</li>
          <li>Skin color: {props.name.skin_color}</li>
          <li>Mass: {props.name.mass}</li>
          <li>Gender: {props.name.gender}</li>
        </ul>
      </Table.Cell>
    </Table.Row>
  );
}

export default GridCard;
