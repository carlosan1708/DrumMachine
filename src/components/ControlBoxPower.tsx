import React from 'react'
import { Switch, Typography } from '@material-ui/core';

type ControlBoxPowerProps = {
    isPowerOn: boolean,
    onPowerSwitchChange: () => void;
}
export default function ControlBoxPower(props: ControlBoxPowerProps) {

    const handleChange = () => {
        props.onPowerSwitchChange();
    };

    return (
        <React.Fragment>
            <Typography gutterBottom>
                Power
            </Typography>
            <Switch
                checked={props.isPowerOn}
                onChange={handleChange}
                color="primary"
                name="DrumMachinePower"
            />
        </React.Fragment>
    )
}
