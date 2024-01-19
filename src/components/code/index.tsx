import Css from "./Css";
import Html from "./Html"
import Javascript from "./Javascript";
import { Container } from "./styled";

const CodeBody = () => {
    return (
        <>
            <Container>
                <Html />
                <Css />
                <Javascript />
            </Container>
        </>
    )
}

export default CodeBody;
