import React, { Component } from 'react'
import { Slider, Typography } from '@material-ui/core'

type DrumMachineProps = {
    onVolumeSliderChange: (newValue: number) => void;
}

type DrumMachineState = {
    internalVolume: number
    timeout: any
}


export default class ControlBoxVolume extends Component<DrumMachineProps, DrumMachineState> {

    /**
     * Holding state for volume slider. 
     * @param props
     */
    constructor(props: DrumMachineProps) {
        super(props);
        this.state = {
            internalVolume: 50,
            timeout: undefined,
        }
    }

    /**
     * Timeout will prevent onChange Parent re-rendering.
     * @param event 
     * @param newValue 
     */
    handleSliderChange = (event: React.ChangeEvent<{}>, newValue: number | number[]) => {

        let volNumber: number = 0;
        if (typeof newValue === 'number') {
            volNumber = newValue;
            //Below line could represent an issue. 
            clearTimeout(this.state.timeout)
            const timer = setTimeout(() => {
                this.props.onVolumeSliderChange(this.state.internalVolume);
            }, 200);
            this.setState({
                internalVolume: volNumber,
                timeout: timer
            });
        }
    };

    render(): JSX.Element {
        return (
            <React.Fragment>
                <Typography id="continuous-slider" gutterBottom>
                    Volume: {this.state.internalVolume}
                </Typography>
                <Slider value={this.state.internalVolume} onChange={this.handleSliderChange} aria-labelledby="continuous-slider" />
            </React.Fragment>
        )
    }
}
