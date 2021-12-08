import { BoxProps } from "../../types/style/layout"
import { SizeProps } from "../../types/style/sizing"
import { validateSizeStyle } from "../../utils/style/sizing"
import { validateSpaceStyle } from "../../utils/style/spacing"
import { validateOverflowStyle } from "../../utils/style/layout"

export const bindSizeStyle = ( { width, height }: SizeProps ) => {
    return validateSizeStyle( { width, height } )
}

export const bindBoxStyle = ( { 

    width, height, 
    padding, paddingX, paddingY, 
    margin, marginX, marginY, 
    overflow, overflowX, overflowY 

}: BoxProps ): string => {

    let boxStyle: string = "box"

    boxStyle += bindSizeStyle( { width, height } )
    boxStyle += validatePaddingStyle( padding, paddingX, paddingY )
    boxStyle += validateMarginStyle( margin, marginX, marginY )
    boxStyle += validateOverflowStyle( overflow, overflowX, overflowY )

    return boxStyle

}
