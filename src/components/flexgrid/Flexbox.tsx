import { FlexboxProps } from "../../types/style/flexgrid"
import { bindFlexboxStyle } from "../../lib/style/flexgrid"

/**
 * Efficient way to lay out, align and distribute space among items 
 * in a container, even when their size is unknown and/or dynamic
 * 
 * @see {@link FlexboxProps} for the input data structure
 * 
 * @param flexboxProps - Flexbox properties.
 * @return Flexbox container component
 */
const Flexbox = ( { 

    children, width, height, 
    padding, paddingX, paddingY, 
    overflow, overflowX, overflowY, 
    direction, directionReverse, 
    wrap, wrapReverse, gap, gapX, gapY, 
    justifyContent, alignContent, alignItems 

}: FlexboxProps ): JSX.Element => {
    
    const flexboxStyle: string = bindFlexboxStyle( {

        width, height, 
        padding, paddingX, paddingY, 
        overflow, overflowX, overflowY, 
        direction, directionReverse, 
        wrap, wrapReverse, gap, gapX, gapY, 
        justifyContent, alignContent, alignItems 

    } )

    return (

        <div className={ flexboxStyle }>
            { children }
        </div>

    )

}

export default Flexbox
