import React from 'react'
import { Box, Typography } from '@material-ui/core'

type ControlBoxMusicTextProps = {
    displayMusicText: string
}

const defaultProps = {
    borderColor: 'text.primary',
    border: 1,
    padding: 1,
    paddingLeft: 3,
    paddingRight: 3,
};


export default function ControlBoxMusicText(props: ControlBoxMusicTextProps) {
    return (
        <React.Fragment>
            <Box borderRadius="borderRadius" {...defaultProps}>
                <Typography gutterBottom>
                    {props.displayMusicText}
                </Typography>
            </Box>
        </React.Fragment>
    )
}
