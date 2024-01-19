import { Toolbar } from "@mui/material";
import { Container } from "./styled";
import { ICON_CODEPEND } from "./contants";

const Header = () => {
    return (
        <Container position="static">
            <Toolbar>
                <img src={ICON_CODEPEND} alt="icon" className="icon" />
            </Toolbar>
        </Container>
    );
};

export default Header;
