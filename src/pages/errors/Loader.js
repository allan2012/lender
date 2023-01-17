import React from 'react';
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'
import {Grid, Divider} from "semantic-ui-react"

function LoaderTest() {
    return (
        <div style={{ textAlign: "center"}}>
            <Loader style={{position: "relative", marginTop: "25%", height: "200px"}} active inline='centered' size='huge' />
        </div>
    )
}

export default LoaderTest
