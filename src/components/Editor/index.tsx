/* eslint-disable @typescript-eslint/no-redeclare */
import { Box } from "@mui/material";
import { Header, HeadingEditor } from "./styled";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { Controlled as ControlledEditor } from "react-codemirror2";
import { EditorProps } from "./type";

import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const Editor: React.FC<EditorProps> = ({
    heading,
    icon,
    color,
    language,
    value,
    onChange,
}) => {
    const handleChange = (_: any, __: any, _value: string) => {
        onChange(_value);
    };

    return (
        <>
            <Header>
                <HeadingEditor>
                    <Box
                        component="span"
                        style={{
                            background: color,
                            height: 20,
                            width: 20,
                            display: "flex",
                            placeContent: "center",
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: "#000",
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </HeadingEditor>
                <CloseFullscreenIcon />
            </Header>
            <ControlledEditor
                className="controlled-editor"
                value={value}
                onBeforeChange={handleChange}
                options={{
                    theme: "material",
                    lineNumbers: true,
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                }}
            />
        </>
    );
};

export default Editor;
