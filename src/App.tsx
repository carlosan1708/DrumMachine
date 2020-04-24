import React, { Component } from "react";
import { Grid, withStyles, WithStyles } from "@material-ui/core";

import { musicList } from './sharedFiles/MusicVariables';

import DrumMachine from "./components/DrumMachine";
import ControlBoxVolume from "./components/ControlBoxVolume";
import ControlBoxPower from "./components/ControlBoxPower";
import ControlBoxMusicText from "./components/ControlBoxMusicText";


type DrumMachineState = {
  volume: number
  isPowerOn: boolean
  displayMusicText: string
}


class App extends Component<WithStyles, DrumMachineState> {
  constructor(props: WithStyles) {
    super(props);
    this.state = {
      volume: 50,
      isPowerOn: true,
      displayMusicText: 'Press a Key or a Button'
    }
  }

  handleVolumeSliderChange = (newVolume: number) => {
    this.setState({ volume: newVolume });
  };


  handlePowerSwitchChange = () => {
    this.setState({ isPowerOn: !this.state.isPowerOn })
  };

  handleDisplayMusicTextChange = (newDisplayMusicText: string) => {
    this.setState({ displayMusicText: newDisplayMusicText })
  }

  render(): JSX.Element {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          alignItems="center"
          justify="center"
          direction="row"
        >
          <Grid
            container
            spacing={4}
            xs={12}
            alignItems="center"
            justify="center"
            direction="row"
            style={{ padding: "2rem", background: "#C0D5B4" }}
          >
            <Grid item xs={12} md={8} lg={4} >
              <DrumMachine musicList={musicList} volume={this.state.volume} isPowerOn={this.state.isPowerOn} onDisplayMusicTextChange={this.handleDisplayMusicTextChange} />
            </Grid>
            <Grid item xs={12} md={4} lg={3}>
              <Grid
                container
                alignItems="center"
                justify="center"
                direction="column"
              >
                <ControlBoxPower onPowerSwitchChange={this.handlePowerSwitchChange} isPowerOn={this.state.isPowerOn} />
                <ControlBoxVolume onVolumeSliderChange={this.handleVolumeSliderChange} />
                <ControlBoxMusicText displayMusicText={this.state.displayMusicText} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  },
})(App);
