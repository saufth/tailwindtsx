import { FlexboxProps } from "../../types/style/flexgrid"
import { 
    createDirectionStyle, 
    createWrapStyle, 
    validateGapStyle, 
    createJustifyContentStyle, 
    createAlignContentStyle, 
    createAlignItemsStyle 
} from "../../utils/style/flexgrid"
import { createWidthStyle, createHeightStyle } from "../../utils/style/sizing"
import { validateOverflowStyle } from "../../utils/style/layout"
import { validatePaddingStyle, validateMarginStyle } from "../../utils/style/spacing"

export const bindFlexboxStyle = ( { 

    width, height, 
    padding, paddingX, paddingY, 
    margin, marginX, marginY, 
    overflow, overflowX, overflowY, 
    direction, directionReverse, 
    wrap, wrapReverse, gap, gapX, gapY,
    justifyContent, alignContent, alignItems 

}: FlexboxProps ): string => {

    let flexboxStyle: string = "flex"

    // Binding sizing style properties
    flexboxStyle += createWidthStyle( width )
    flexboxStyle += createHeightStyle( height )
    // Binding padding style property
    flexboxStyle += validatePaddingStyle( padding, paddingX, paddingY )
    // Binding margin style property
    flexboxStyle += validateMarginStyle( margin, marginX, marginY )
    // Binding layout style properties
    flexboxStyle += validateOverflowStyle( overflow, overflowX, overflowY )
    // Binding direction style property
    flexboxStyle += createDirectionStyle( direction, directionReverse )
    // Binding wrap style property
    flexboxStyle += createWrapStyle( wrap, wrapReverse )
    // Binding gap style property
    flexboxStyle += validateGapStyle( gap, gapX, gapY )
    // Binding position style propereties
    flexboxStyle += createJustifyContentStyle( justifyContent )
    flexboxStyle += createAlignContentStyle( alignContent )
    flexboxStyle += createAlignItemsStyle( alignItems )

    return flexboxStyle

}
