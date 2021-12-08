import { BoxProps } from "../../types/style/layout"
import { bindBoxStyle } from "../../lib/style/layout"

/**
 * Simple box container component
 * 
 * @see {@link BoxProps} for the input data structure
 * 
 * @param boxProps - Box propertie
 * @return Box component
 */
const Box = ( { 

    children, width, height, 
    padding, paddingX, paddingY, 
    margin, marginX, marginY, 
    overflow, overflowX, overflowY 

}: BoxProps ): JSX.Element => {

    // Binding style
    const boxStyle: string = bindBoxStyle( { 

        width, height, 
        padding, paddingX, paddingY, 
        margin, marginX, marginY, 
        overflow, overflowX, overflowY 

    } )

    return (

        <div className={ boxStyle }>
            { children }
        </div>

    )

}

export default Box
