import { useContext } from "react";
import Editor from "../Editor";
import {
    DataContext,
    DataContextDefaultType,
} from "../context/DataProviderEditor";
import { WrapperCode } from "./styled";

const Javascript = () => {
    const { js, setJs } = useContext<DataContextDefaultType>(DataContext);
    return (
        <WrapperCode>
            <Editor
                heading="Javascript"
                icon="()"
                color="#FCD000"
                language="javascript"
                value={js}
                onChange={setJs}
            />
        </WrapperCode>
    );
};

export default Javascript;
