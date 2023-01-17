import React from 'react';
import {
    BsEye
} from "react-icons/bs";
import {Grid, Divider, Icon, Table, Input, Button, Pagination} from "semantic-ui-react"

function MessageLog() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <h3>SENT MESSAGES</h3>
                    <Divider/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Input icon={<Icon name='search' circular link />} placeholder='Search...' />
                    <Table selectable>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>#</Table.HeaderCell>
                                <Table.HeaderCell>DATE</Table.HeaderCell>
                                <Table.HeaderCell>TO</Table.HeaderCell>
                                <Table.HeaderCell>MESSAGE</Table.HeaderCell>
                                <Table.HeaderCell>STATUS</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>2023-02-02 11:22:44</Table.Cell>
                                <Table.Cell>254712215805</Table.Cell>
                                <Table.Cell>
                                    Dear Vincent Korir Kipkemoi. The loan you applied for KShs. 5,000 has been approved
                                    and disbursed to your mpesa account.The amount due will be KSHs. 5,700 and the repayment
                                    date will be January 30th, 2023 Thank You for choosing Adler Capital Limited. If you
                                    need any clarification kindly email info@adlercapital.co.ke or call 0702200500.
                                </Table.Cell>
                                <Table.Cell>Success</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>2023-02-02 11:22:44</Table.Cell>
                                <Table.Cell>254712215805</Table.Cell>
                                <Table.Cell>
                                    Thank you for repaying your loan in full. We hope to be of service to you soon. Regards Adler Capital Team
                                </Table.Cell>
                                <Table.Cell>Success</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>1</Table.Cell>
                                <Table.Cell>2023-02-02 11:22:44</Table.Cell>
                                <Table.Cell>254712215805</Table.Cell>
                                <Table.Cell>
                                    Brian Boinett Kipchumba Phone: 0708709820 has applied for a new loan of KES 5,000 that needs to be reviewed
                                </Table.Cell>
                                <Table.Cell>Success</Table.Cell>
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

export default MessageLog
