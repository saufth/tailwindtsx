import layoutStyle from "../../styles/layout.module.css"
import typographyStyle from "../../styles/typography.module.css"
import buttonsStyle from "../../styles/buttons.module.css"

/**
 * Set of major block of navigation links
 * 
 * @see {@link NavigationProps} for the input data structure
 * 
 * @param navigationProps - Navigation component properties
 * @return Navigation component
 */
const Nav = (): JSX.Element => {

    const navData: string[] = [ "Home", "Projects", "Contact" ]

    const navItems: JSX.Element[] = navData.map(( value: string, index: number ): JSX.Element => (
        <li key={ index }>
            <a href="#" className={ buttonsStyle.navLink }>
                { value }
            </a>
        </li>
    ))

    return (

        <nav className={ typographyStyle.textLight }>
            <ul className={ layoutStyle.flexCenter }>
                { navItems }
            </ul>
        </nav>

    )

}

export default Nav
