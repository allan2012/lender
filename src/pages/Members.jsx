import React from 'react';
import {
    BsEye
} from "react-icons/bs";
import {Grid, Divider, Icon, Table, Input, Button, Pagination, Label} from "semantic-ui-react"

function Members() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <h3>MEMBERS</h3>
                    <Divider/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Input icon={<Icon name='search' circular link />} placeholder='Search...' />
                    <Table singleLine selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>MEMBER #</Table.HeaderCell>
                                <Table.HeaderCell>NAMES</Table.HeaderCell>
                                <Table.HeaderCell>NATIONAL ID</Table.HeaderCell>
                                <Table.HeaderCell>DOB</Table.HeaderCell>
                                <Table.HeaderCell>PHONE</Table.HeaderCell>
                                <Table.HeaderCell>EMAIL</Table.HeaderCell>
                                <Table.HeaderCell>STATUS</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>122</Table.Cell>
                                <Table.Cell>James Kinyanjui Chege</Table.Cell>
                                <Table.Cell>12390777</Table.Cell>
                                <Table.Cell>01/08/1998</Table.Cell>
                                <Table.Cell>254700177889</Table.Cell>
                                <Table.Cell>james@mailinator.com</Table.Cell>
                                <Table.Cell>
                                    <Label color='green' horizontal>
                                        Approved
                                    </Label>
                                </Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row error>
                                <Table.Cell>14</Table.Cell>
                                <Table.Cell>Hellen Chege</Table.Cell>
                                <Table.Cell>20090999</Table.Cell>
                                <Table.Cell>12/12/1992</Table.Cell>
                                <Table.Cell>254700177889</Table.Cell>
                                <Table.Cell>hellen@rocketmail.com</Table.Cell>
                                <Table.Cell>
                                    <Label color='red' horizontal>
                                        Rejected
                                    </Label>
                                </Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>209</Table.Cell>
                                <Table.Cell>Jonathan Kiptai Meto</Table.Cell>
                                <Table.Cell>20009777</Table.Cell>
                                <Table.Cell>31/01/2000</Table.Cell>
                                <Table.Cell>254711200900</Table.Cell>
                                <Table.Cell>metto@mailme.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>376</Table.Cell>
                                <Table.Cell>Amy Winehouse</Table.Cell>
                                <Table.Cell>56609777</Table.Cell>
                                <Table.Cell>11/08/2006</Table.Cell>
                                <Table.Cell>254111299008</Table.Cell>
                                <Table.Cell>amy.w@gmail.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>376</Table.Cell>
                                <Table.Cell>Patrick Wainaina Kibe</Table.Cell>
                                <Table.Cell>56609777</Table.Cell>
                                <Table.Cell>11/08/2006</Table.Cell>
                                <Table.Cell>254111299008</Table.Cell>
                                <Table.Cell>amy.w@gmail.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>376</Table.Cell>
                                <Table.Cell>Sarah Muthee Wanjiru</Table.Cell>
                                <Table.Cell>56609777</Table.Cell>
                                <Table.Cell>11/08/2006</Table.Cell>
                                <Table.Cell>254111299008</Table.Cell>
                                <Table.Cell>amy.w@gmail.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>376</Table.Cell>
                                <Table.Cell>Elvis Mulinge Mutiso</Table.Cell>
                                <Table.Cell>56609777</Table.Cell>
                                <Table.Cell>11/08/2006</Table.Cell>
                                <Table.Cell>254111299008</Table.Cell>
                                <Table.Cell>amy.w@gmail.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>376</Table.Cell>
                                <Table.Cell>Francis Melly Onyango</Table.Cell>
                                <Table.Cell>56609777</Table.Cell>
                                <Table.Cell>11/08/2006</Table.Cell>
                                <Table.Cell>254111299008</Table.Cell>
                                <Table.Cell>amy.w@gmail.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>376</Table.Cell>
                                <Table.Cell>John Mutai Sato</Table.Cell>
                                <Table.Cell>56609777</Table.Cell>
                                <Table.Cell>11/08/2006</Table.Cell>
                                <Table.Cell>254111299008</Table.Cell>
                                <Table.Cell>amy.w@gmail.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
                                <Table.Cell><Button size='mini'><BsEye /></Button></Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>12</Table.Cell>
                                <Table.Cell>Robert Albert Kiptoo</Table.Cell>
                                <Table.Cell>56609777</Table.Cell>
                                <Table.Cell>11/08/2006</Table.Cell>
                                <Table.Cell>254111299008</Table.Cell>
                                <Table.Cell>amy.w@gmail.com</Table.Cell>
                                <Table.Cell>Pending</Table.Cell>
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

export default Members
