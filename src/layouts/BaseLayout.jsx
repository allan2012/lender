import React from 'react';
import { Container, Grid, Divider, Icon, Dropdown, Input, Image } from 'semantic-ui-react'
import {
  BsHouse, BsPeople, BsJournalText, BsCreditCard2Back, BsDoorClosed,
  BsEnvelope, BsGear, BsInfoCircle, BsBarChartLine, BsList, BsPerson, BsClockHistory, BsPersonCircle
} from "react-icons/bs";
import { Outlet, Link } from "react-router-dom";
import logo from '../images/logo.png'

const trigger = (
  <span>
    <Icon name='user' /> Hello, Bob
  </span>
)

const options = [
  {
    key: <BsPersonCircle />,
    text: (
      <span>
        Signed in as <strong>Bob Smith</strong>
      </span>
    ),
    disabled: true,
  },
  { key: 'profile', text: 'Your Profile' },
  { key: 'help', text: 'Help' },
  { key: 'settings', text: 'Settings' },
  { key: 'sign-out', text: 'Sign Out' },
]

function BaseLayout() {

  return (
    <>
      <div className='sidebar'>
        <div className='logo' style={{ textAlign: "center"}}>
          <Image src={logo} style={{ width: "70px", height: "70px", margin: "0 auto"}} />
          <h3>Lender Tracker</h3>
          <Divider />
        </div>
        <Link to='/dashboard'><BsHouse className='nav-icon' /> Dashboard</Link>
        <Link to='/members'><BsPeople className='nav-icon' /> Members</Link>
        <Link to='/loans'><BsJournalText className='nav-icon' /> Loans</Link>
        <a href="#about"><BsCreditCard2Back className='nav-icon' /> Repayments</a>
        <Link to='/messages'><BsEnvelope className='nav-icon' /> Message logs</Link>
        <Divider />
        <a href="#about"><BsBarChartLine className='nav-icon' /> Reports</a>
        <a href="#about"><BsClockHistory className='nav-icon' /> Audit logs</a>
        <a href="#about"><BsGear className='nav-icon' /> Settings</a>
        <a href="#about"><BsPerson className='nav-icon' /> Account</a>
        <a href="#about"><BsInfoCircle className='nav-icon' /> Help</a>

        <div id="sidebar-footer">
          <a href="#about"><BsDoorClosed className='nav-icon' /> Log Out</a>
          <Divider />
        </div>
      </div>
      <div className='content'>
        <div className='topBar'>
          <Grid>
            <Grid.Column width={1}>
              <BsList style={{ fontSize: 32}} />
            </Grid.Column>
            <Grid.Column computer={11} mobile={16}>
              <Input style={{ width: "100%" }} icon={<Icon name='search' circular link />} placeholder='Search...' />
            </Grid.Column>
            <Grid.Column computer={4} mobile={16} className="profile-menu">
              <Dropdown trigger={trigger} options={options} />
            </Grid.Column>
          </Grid>
        </div>
        <Grid>
          <Container className='main-content'>
            <Outlet />
          </Container>
        </Grid>
      </div>
    </>
  );
}

export default BaseLayout;
