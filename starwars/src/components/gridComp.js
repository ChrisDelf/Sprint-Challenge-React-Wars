import React from 'react';
import {Header, Table} from 'semantic-ui-react'

function GridComp () {

  return(
    <Table>
    <Header>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell singleLine>Name</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>BirthDay</Table.HeaderCell>
        <Table.HeaderCell>Year of Creation</Table.HeaderCell>
        <Table.HeaderCell>Comments</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    </Header>
    </Table>
 )
}


export default GridComp
