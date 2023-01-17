import React from 'react';
import { BsEye } from "react-icons/bs";
import {Grid, Divider, Icon, Table, Input, Button, Pagination} from "semantic-ui-react"

function Loans() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <h3>LOANS</h3>
                    <Divider/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Input icon={<Icon name='search' circular link />} placeholder='Search...' />
                    <Table singleLine>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>LOANS #</Table.HeaderCell>
                                <Table.HeaderCell>NAMES</Table.HeaderCell>
                                <Table.HeaderCell>PHONE</Table.HeaderCell>
                                <Table.HeaderCell>AMOUNT</Table.HeaderCell>
                                <Table.HeaderCell>DATE APPLIED</Table.HeaderCell>
                                <Table.HeaderCell># (WKS)</Table.HeaderCell>
                                <Table.HeaderCell>DATE DUE</Table.HeaderCell>
                                <Table.HeaderCell>AMOUNT REPAID</Table.HeaderCell>
                                <Table.HeaderCell>BALANCE</Table.HeaderCell>
                                <Table.HeaderCell>STATUS</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>122</Table.Cell>
                                <Table.Cell>James Kinyanjui Chege</Table.Cell>
                                <Table.Cell>254700200300</Table.Cell>
                                <Table.Cell>16,500</Table.Cell>
                                <Table.Cell>2023-01-01 08:55</Table.Cell>
                                <Table.Cell>4</Table.Cell>
                                <Table.Cell>2023-02-02 11:55 (14)</Table.Cell>
                                <Table.Cell>6,500</Table.Cell>
                                <Table.Cell>10,000</Table.Cell>
                                <Table.Cell>Sent</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={12}></Grid.Column>
                <Grid.Column width={4} style={{ textAlign: "right"}}>
                    <Pagination
                        boundaryRange={0}
                        defaultActivePage={1}
                        ellipsisItem={null}
                        firstItem={null}
                        lastItem={null}
                        siblingRange={1}
                        totalPages={10}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Loans
