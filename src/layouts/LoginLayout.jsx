import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../images/logo.png'

const LoginLayout = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 400 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src={logo} /> Log-in to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button primary fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
               Forgot your password? <a href='#'>Recover</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginLayout
