import React from "react";
import Grid from "@material-ui/core/Grid";
import { MusicElement } from './../sharedFiles/MusicVariables';
import { reproduceAudio } from './../sharedFiles/GlobalFunctions';

import KeyDrum from "./KeyDrum";

type MusicProp = {
  volume: number
  isPowerOn: boolean
  musicList: MusicElement[]
  onDisplayMusicTextChange: (newDisplayMusicText: string) => void
}

export default class DrumMachine extends React.Component<MusicProp> {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  chunkArray = (myArray: Array<MusicElement>, chunk_size: number) => {
    //Copy to avoid changing the props
    let copyArray = [...myArray];
    var results = [];

    while (copyArray.length) {
      results.push(copyArray.splice(0, chunk_size));
    }
    return results;
  }

  handleChangeDisplayMusicText = (newDisplayMusicText: string) => {
    this.props.onDisplayMusicTextChange(newDisplayMusicText);
  }

  handleKeyPress = (e: KeyboardEvent) => {
    if (e.key) {
      let mapElement = this.props.musicList.find(el => el.musicKey === e.key.toUpperCase());
      if (mapElement) {
        if (this.props.isPowerOn) {
          reproduceAudio(this.props.volume, mapElement.musicUrl);
          this.handleChangeDisplayMusicText(mapElement.musicText);
        }
      }
    }
  }

  render(): JSX.Element {
    //Chunk array by 3
    const containerArray = this.chunkArray(this.props.musicList, 3);
    return (

      <React.Fragment>
        <Grid container spacing={4} justify="center" alignItems="center">
          {containerArray.map((individualArray, index) => {
            return (
              <Grid key={index} container item xs={12} spacing={4}>
                {individualArray.map((elem, index) => {
                  let keyString: string = elem.musicKey;
                  return (
                    <KeyDrum
                      key={keyString}
                      musicKey={elem.musicKey}
                      musicUrl={elem.musicUrl}
                      musicText={elem.musicText}
                      volume={this.props.volume}
                      isPowerOn={this.props.isPowerOn}
                      onDisplayMusicTextChange={this.handleChangeDisplayMusicText}
                    />
                  )
                })}
              </Grid>

            )
          })
          }
        </Grid>

      </React.Fragment>
    );
  }

}
