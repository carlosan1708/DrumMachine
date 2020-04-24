import Grid from "@material-ui/core/Grid";
import React from "react";
import Button from "@material-ui/core/Button";
import { reproduceAudio } from './../sharedFiles/GlobalFunctions';

type MusicElement =
  {
    musicKey: string
    musicUrl: string
    musicText: string
    volume: number
    isPowerOn: boolean
    onDisplayMusicTextChange: (newDisplayMusicText: string) => void
  }

export default function KeyDrum(props: MusicElement) {

  const handleChangeDisplayMusicText = (newDisplayMusicText: string) => {
    props.onDisplayMusicTextChange(newDisplayMusicText);
  }

  const internalReproduce = () => {

    if (props.isPowerOn) {
      reproduceAudio(props.volume, props.musicUrl)
      handleChangeDisplayMusicText(props.musicText)
    }
  }

  return (
    <Grid item xs={4}>
      <Button variant="contained" fullWidth onClick={internalReproduce}>
        {props.musicKey}
      </Button>
    </Grid>
  );
}
