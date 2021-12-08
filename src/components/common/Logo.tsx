import { LogoProps } from "../../types/common/logotype"

/**
 * Logotype component
 * 
 * @see {@link LogoProps} for the input data structure
 * 
 * @param logoProps - Container properties
 * @return Container component
 */
const Logo = ({size, mark}: LogoProps): JSX.Element => {

    // Set default values if parameters are not defined
    const fontSizeStyle: string = `text-${ size ? size : "lg" }`
    const markStyle: string = mark ? "hidden" : ""

    // Binding style
    const logoStyle: string = `font-mono ${ fontSizeStyle }`

    return (
        <span className={ logoStyle }>
            <span className="text-gray-500">
                s<span className={ markStyle }>auft</span>
            </span>
            <span className="text-green-500">
                w<span className={ markStyle }>are</span>:
            </span>
        </span>
    )
}

export default Logo
