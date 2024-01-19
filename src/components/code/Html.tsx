import { useContext } from "react";
import Editor from "../Editor";
import { WrapperCode } from "./styled";
import {
    DataContext,
    DataContextDefaultType,
} from "../context/DataProviderEditor";

const Html = () => {
    const { html, setHtml } = useContext<DataContextDefaultType>(DataContext);
    return (
        <WrapperCode>
            <Editor
                heading="HTML"
                icon="/"
                color="#FF3C41"
                language="xml"
                value={html}
                onChange={setHtml}
            />
        </WrapperCode>
    );
};

export default Html;
