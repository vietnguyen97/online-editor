/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProviderEditor";
import { Box } from "@mui/material";

const Result = () => {
    const { html, css, js } = useContext(DataContext);
    const [src, setSrc] = useState('');
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `
    useEffect(() => {
        const timeout = setTimeout(() => {
            setSrc(srcCode);
        }, 1000)
        return () => clearTimeout(timeout);
    }, [html, css, js])
    return (
        <Box>
            <iframe srcDoc={src} title="Output" sandbox="allow-scripts" width="100%" height="100%" frameBorder={0} />
        </Box>
    )
}

export default Result;
