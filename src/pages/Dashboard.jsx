import React from 'react';
import {
    BsPersonPlus,
    BsCalculator,
    BsPeople,
    BsJournalText,
    BsJournalX,
    BsTelephoneOutbound,
    BsEnvelope,
    BsCreditCard2Back
} from "react-icons/bs";
import {Grid, Divider, Button} from "semantic-ui-react"
import {Sparklines, SparklinesBars} from 'react-sparklines';

function Dashboard() {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={4}>
                    <h3>DASHBOARD</h3>
                    <Divider/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Button size='huge' primary><BsCalculator/></Button>
                    <Button size='huge' primary><BsPersonPlus/></Button>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-info'>
                        <h2><BsPeople className="stat-icon"/> 34</h2>
                        <p>New Registrations</p>
                    </div>
                </Grid.Column>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-info'>
                        <h2><BsJournalText className="stat-icon"/> 9</h2>
                        <p>Pending Loans</p>
                    </div>
                </Grid.Column>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-danger'>
                        <h2><BsJournalX className="stat-icon"/> 13</h2>
                        <p># Defaulted Loans</p>
                    </div>
                </Grid.Column>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-success'>
                        <h2>67,809/-</h2>
                        <p>Repayments Today</p>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-info'>
                        <h2><BsCreditCard2Back className="stat-icon"/> 3</h2>
                        <p># Repayments</p>
                    </div>
                </Grid.Column>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-info'>
                        <h2><BsEnvelope className="stat-icon"/> 85</h2>
                        <p># SMS sent</p>
                    </div>
                </Grid.Column>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-info'>
                        <h2><BsTelephoneOutbound className="stat-icon"/> 13</h2>
                        <p># Follow-up calls</p>
                    </div>
                </Grid.Column>
                <Grid.Column computer={3} mobile={16}>
                    <div className='card card-info'>
                        <h2>7,809</h2>
                        <p>SMS Balance</p>
                    </div>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column computer={6} mobile={16}>
                    <div className="card">
                        <p>This month Repayment Trends</p>
                        <Sparklines data={[5, 10, 5, 0, 4, 6, 2, 3, 2, 0, 0, 1, 23]}>
                            <SparklinesBars style={{stroke: "white", fill: "#41c3f9", fillOpacity: ".25"}}/>
                        </Sparklines>
                    </div>
                </Grid.Column>
                <Grid.Column computer={6} mobile={16}>
                    <div className="card">
                        <p>This month Borrowing Trends</p>
                        <Sparklines data={[15, 17, 22, 0, 4, 6, 2, 3, 2, 0, 0, 1, 12]}>
                            <SparklinesBars style={{stroke: "white", fill: "green", fillOpacity: ".25"}}/>
                        </Sparklines>
                    </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Dashboard
