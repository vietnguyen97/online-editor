import { Box, styled } from "@mui/material";

export const WrapperCode = styled(Box)`
    flex-grow: 1;
    flex-basis: 0;
    display: flex;
    flex-direction: column;
    padding: 0px 8px 8px;
    .CodeMirror {
        height: 340px;
        color: #fff;
    }
    .CodeMirror-gutters {
        background: #1d1e22 !important;
    }
    .CodeMirror-scroll {
        background: #1d1e22 !important;
    }
`

export const Container = styled(Box)`
    display: flex;
    background-color: #060606;
    height: 50vh;
`