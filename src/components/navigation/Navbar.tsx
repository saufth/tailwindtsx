import FlexBox from "../flexgrid/Flexbox"
import Container from "../layout/Container"
import Nav from "./Nav"
import Logo from "../common/Logo"

/**
 * Navbar component
 * 
 * @return Section container component
 */
const Navbar = (): JSX.Element => {

    return (

        <header>
            <Container>
                <FlexBox height="16" justifyContent="between" alignItems="center" overflow="hidden">
                    <div className="inline-block">
                        <Logo size="3xl" mark={ true } />
                    </div>
                    <div className="inline-block">
                        <Nav />
                    </div>
                </FlexBox>
            </Container>
        </header>

    )

}

export default Navbar
