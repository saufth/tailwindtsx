import { FlexboxProps } from "../../types/style/flexgrid"
import { createWidthStyle, createHeightStyle } from "../../utils/style/sizing"

export const bindFlexboxStyle = ( { 

    width, height 

}: FlexboxProps ): string => {

    let flexboxStyle: string = "flex"

    // Binding sizing style properties
    flexboxStyle += createWidthStyle( width )
    flexboxStyle += createHeightStyle( height )

    return flexboxStyle

}
