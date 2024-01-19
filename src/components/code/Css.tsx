import { useContext } from "react";
import Editor from "../Editor";
import {
    DataContext,
    DataContextDefaultType,
} from "../context/DataProviderEditor";
import { WrapperCode } from "./styled";

const Css = () => {
    const { css, setCss } = useContext<DataContextDefaultType>(DataContext);
    return (
        <WrapperCode>
            <Editor
                heading="Css"
                icon="*"
                color="#0EBEFF"
                language="css"
                value={css}
                onChange={setCss}
            />
        </WrapperCode>
    );
};

export default Css;
