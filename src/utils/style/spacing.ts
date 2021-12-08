import { 
    PaddingProps, 
    PaddingAllProps, 
    PaddingXNodesProps, 
    PaddingXStyle, 
    PaddingXAndNodesProps, 
    PaddingYStyle, 
    PaddingYNodesProps, 
    PaddingYAndNodesProps, 
    PaddingXYProps, 
    PaddingStylePrefix, 
    PaddingAllStyle, 
    PaddingTopStyle, 
    PaddingRightStyle, 
    PaddingBottomStyle, 
    PaddingLeftStyle, 
    MarginProps, 
    MarginAllProps, 
    MarginXStyle, 
    MarginXNodesProps, 
    MarginXAndNodesProps, 
    MarginYNodesProps, 
    MarginYStyle, 
    MarginYAndNodesProps, 
    MarginXYProps, 
    MarginStylePrefix, 
    MarginAllStyle, 
    MarginTopStyle, 
    MarginRightStyle, 
    MarginBottomStyle, 
    MarginLeftStyle 
} from "../../types/style/spacing"
import { SizeNumeric, SizeBasic } from "../../types/style/sizing"
import { createStyle } from "./helpers"

/** Padding prefix */
const paddingPrefix: PaddingStylePrefix = "p-"
/** Padding X prefix */
const paddingXPrefix: PaddingStylePrefix = "px-"
/** Padding Y prefix */
const paddingYPrefix: PaddingStylePrefix = "py-"
/** Padding top prefix */
const paddingTopPrefix: PaddingStylePrefix = "pt-"
/** Padding right prefix */
const paddingRightPrefix: PaddingStylePrefix = "pr-"
/** Padding bottom prefix */
const paddingBottomPrefix: PaddingStylePrefix = "pb-"
/** Padding left prefix */
const paddingLeftPrefix: PaddingStylePrefix = "pl-"

/**
 * Creates a padding style for all nodes 
 * concatenating the padding prefix and the given value
 * 
 * @see paddingPrefix const for the prefix
 * @see PaddingAllStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for all padding nodes
 * @returns The padding style
 */
const createPaddingAllStyle = ( value: SizeNumeric ): PaddingAllStyle => {
    return <PaddingAllStyle>createStyle({ prefix: paddingPrefix, value })
}

/**
 * Creates a padding X style for right and left nodes 
 * concatenating the padding X prefix and the given value
 * 
 * @see paddingXPrefix constant for the prefix
 * @see PaddingXStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for right and left padding nodes
 * @returns The padding X style
 */
const createPaddingXStyle = ( value: SizeNumeric ): PaddingXStyle => {
    return <PaddingXStyle>createStyle({ prefix: paddingXPrefix, value })
}

/**
 * Creates a padding Y style for top and bottom nodes 
 * concatenating the padding Y prefix and the given value
 * 
 * @see paddingYPrefix constant for the prefix
 * @see PaddingYStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for top and bottom padding nodes
 * @returns The padding Y style
 */
const createPaddingYStyle = ( value: SizeNumeric ): PaddingYStyle => {
    return <PaddingYStyle>createStyle({ prefix: paddingYPrefix, value })
}

/**
 * Creates a padding top style concatenating the padding top prefix and the given value
 * 
 * @see paddingTopPrefix constant for the prefix
 * @see PaddingTopStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for padding top node
 * @returns The padding top style
 */
const createPaddingTopStyle = ( value: SizeNumeric ): PaddingTopStyle => {
    return <PaddingTopStyle>createStyle({ prefix: paddingTopPrefix, value })
}

/**
 * Cretes a padding right style concatenating the padding right prefix and the given value
 * 
 * @see paddingRightPrefix constant for the prefix
 * @see PaddingRightStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for padding right node
 * @returns The padding right style
 */
const createPaddingRightStyle = ( value: SizeNumeric ): PaddingRightStyle => {
    return <PaddingRightStyle>createStyle({ prefix: paddingRightPrefix, value })
}

/**
 * Creates a padding bottom style concatenating the padding bottom prefix and the given value
 * 
 * @see paddingBottomPrefix constant for the prefix
 * @see PaddingBottomStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for padding bottom node
 * @returns The padding bottom style
 */
const createPaddingBottomStyle = ( value: SizeNumeric ): PaddingBottomStyle => {
    return <PaddingBottomStyle>createStyle({ prefix: paddingBottomPrefix, value })
}

/**
 * Creates a padding left style concatenating the padding left prefix and the given value
 * 
 * @see paddingLeftPrefix constant for the prefix
 * @see PaddingLeftStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for padding left node
 * @returns The padding left style
 */
const createPaddingLeftStyle = ( value: SizeNumeric ): PaddingLeftStyle => {
    return <PaddingLeftStyle>createStyle({ prefix: paddingLeftPrefix, value })
}

/**
 * Validates the given value to create a padding all nodes style
 * 
 * @see PaddingAllProps type for all padding nodes properties
 * @see createPaddingAllStyle function for the style creation
 * 
 * @param PaddingAllProps - The value for all padding nodes
 * @returns The padding all nodes style
 */
const validatePaddingAllStyle = ( { padding }: PaddingAllProps ): string => {
    return padding ? createPaddingAllStyle(padding) : ""
}

/**
 * Validates the given padding right and left values to create a padding right and left style
 * 
 * @see PaddingXNodesProps interface for the properties
 * @see createPaddingRightStyle function for the padding right style
 * @see createPaddingLeftStyle function for the padding left style
 * 
 * @param PaddingXNodesProps - The values of the padding X nodes style properties
 * @returns The padding right and left nodes style
 */
const validatePaddingXNodesStyle = ( { paddingRight, paddingLeft }: PaddingXNodesProps ): string => {
    const paddingRightStyle: string = paddingRight ? ` ${createPaddingRightStyle(paddingRight)}` : ""
    const paddingLeftStyle: string = paddingLeft ? ` ${createPaddingLeftStyle(paddingLeft)}` : ""
    return `${paddingRightStyle}${paddingLeftStyle}`
}

/**
 * Validates the given padding X, top and bottom values to create a padding X or top and bottom style
 * 
 * @see PaddingXAndNodesProps interface for the properties
 * @see createPaddingXStyle function for the padding X style
 * @see validatePaddingXNodesStyle function for the padding right and left style
 * 
 * @param PaddingXAndNodesProps - The values of the padding X, right and left style properties
 * @returns The padding X, or right and left nodes style
 */
const validatePaddingXStyle = ( { 
    paddingX, paddingRight, paddingLeft 
}: PaddingXAndNodesProps ): string => {
    return paddingX 
         ? ` ${createPaddingXStyle(paddingX)}` 
         : validatePaddingXNodesStyle({ paddingRight, paddingLeft })
}

/**
 * Validates the given padding top and bottom values to create a padding top and bottom style
 * 
 * @see createPaddingTopStyle function for the padding top style
 * @see createPaddingBottomStyle function for the padding bottom style
 * 
 * @param PaddingYNodesProps - The values of the padding Y nodes style
 * @returns The padding top and bottom nodes style
 */
const validatePaddingYNodesStyle = ( { paddingTop, paddingBottom }: PaddingYNodesProps ): string => {
    const paddingTopStyle: string = paddingTop ? ` ${createPaddingTopStyle(paddingTop)}` : ""
    const paddingBottomStyle: string = paddingBottom ? ` ${createPaddingBottomStyle(paddingBottom)}` : ""
    return `${paddingTopStyle}${paddingBottomStyle}`
}

/**
 * Validates the given padding Y, top and bottom values to create a padding Y or top and bottom style
 * 
 * @see PaddingYAndNodesProps interface for the properties
 * @see createPaddingYStyle function for the padding Y style
 * @see validatePaddingYNodesStyle function for the padding top and bottom style
 * 
 * @param PaddingYAndNodesProps - The values of the padding Y, top and bottom style properties
 * @returns The padding Y, or top and bottom nodes style
 */
const validatePaddingYStyle = ( { 
    paddingY, paddingTop, paddingBottom 
}: PaddingYAndNodesProps ): string => {
    return paddingY 
         ? ` ${createPaddingYStyle(paddingY)}` 
         : validatePaddingYNodesStyle({ paddingTop, paddingBottom })
}

/**
 * Validates the padding X and Y style properties to create a padding X and Y style
 * 
 * @see PaddingXYStyle interface for the properties
 * @see createPaddingXStyle function for the padding X style
 * @see createPaddingYStyle function for the padding Y style
 * 
 * @param PadddingXYProps - The values of the padding X and Y style
 * @returns The padding X and Y style
 */
const validatePaddingXYStyle = ( { paddingX, paddingY }: PaddingXYProps ): string => {
    const paddingXStyle: string = paddingX ? ` ${createPaddingXStyle(paddingX)}` : ""
    const paddingYStyle: string = paddingY ? ` ${createPaddingYStyle(paddingY)}` : ""
    return `${paddingXStyle}${paddingYStyle}`
}

/**
 * Validates the padding style properties to create a padding style
 * 
 * @see PaddingProps interface for the padding properties
 * @see createPaddingAllStyle function for the padding style
 * @see createsPaddingXStyle function for the padding X style
 * @see createPaddingYStyle function for the padding Y style
 * @see validatePaddingXNodesStyle function for the padding X nodes style
 * @see validatePaddingYNodesStyle function for the padding Y nodes style
 * 
 * @param PaddingProps - The values of the padding properties
 * @returns The padding style
 */
export const validatePaddingStyle = ( { 
    padding, paddingX, paddingY, paddingTop, paddingRight, paddingBottom, paddingLeft 
}: PaddingProps ): string => {

    const paddingStyle: string = validatePaddingAllStyle({ padding })
    const paddingXStyle: string = validatePaddingXStyle({ paddingX, paddingRight, paddingLeft })
    const paddingYStyle: string = validatePaddingYStyle({ paddingY, paddingTop, paddingBottom })

    return paddingStyle || `${paddingXStyle}${paddingYStyle}`

}

/** Margin prefix */
export const marginPrefix: MarginStylePrefix = "m-"
/** Margin X prefix */
export const marginXPrefix: MarginStylePrefix = "mx-"
/** Margin Y prefix */
export const marginYPrefix: MarginStylePrefix = "my-"
/** Margin top prefix */
export const marginTopPrefix: MarginStylePrefix = "mt-"
/** Margin right prefix */
export const marginRightPrefix: MarginStylePrefix = "mr-"
/** Margin bottom prefix */
export const marginBottomPrefix: MarginStylePrefix = "mb-"
/** Margin left prefix */
export const marginLeftPrefix: MarginStylePrefix = "ml-"

/**
 * Creates a margin style for all nodes 
 * concatenating the margin prefix and the given value
 * 
 * @see marginPrefix constant for the prefix
 * @see MarginAllStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for all margin nodes
 * @returns The margin style
 */
 const createMarginAllStyle = ( value: SizeBasic ): MarginAllStyle => {
    return <MarginAllStyle>createStyle({ prefix: marginPrefix, value })
}

/**
 * Creates a margin X style for right and left nodes 
 * concatenating the margin X prefix and the given value
 * 
 * @see marginXPrefix constant for the prefix
 * @see MarginXStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for right and left margin nodes
 * @returns The margin X style
 */
const createMarginXStyle = ( value: SizeBasic ): MarginXStyle => {
    return <MarginXStyle>createStyle({ prefix: marginXPrefix, value })
}

/**
 * Creates a margin Y style for top and bottom nodes 
 * concatenating the margin Y prefix and the given value
 * 
 * @see marginYPrefix constant for the prefix
 * @see MarginYStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for top and bottom margin nodes
 * @returns The margin Y style
 */
const createMarginYStyle = ( value: SizeBasic ): MarginYStyle => {
    return <MarginYStyle>createStyle({ prefix: marginYPrefix, value })
}

/**
 * Creates a margin top style concatenating the margin top prefix and the given value
 * 
 * @see marginTopPrefix constant for the prefix
 * @see MarginTopStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for margin top node
 * @returns The margin top style
 */
const createMarginTopStyle = ( value: SizeBasic ): MarginTopStyle => {
    return <MarginTopStyle>createStyle({ prefix: marginTopPrefix, value })
}

/**
 * Cretes a margin right style concatenating the margin right prefix and the given value
 * 
 * @see marginRightPrefix constant for the prefix
 * @see MarginRightStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for margin right node
 * @returns The margin right style
 */
const createMarginRightStyle = ( value: SizeBasic ): MarginRightStyle => {
    return <MarginRightStyle>createStyle({ prefix: marginRightPrefix, value })
}

/**
 * Creates a margin bottom style concatenating the margin bottom prefix and the given value
 * 
 * @see marginBottomPrefix constant for the prefix
 * @see MarginBottomStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for margin bottom node
 * @returns The margin bottom style
 */
const createMarginBottomStyle = ( value: SizeBasic ): MarginBottomStyle => {
    return <MarginBottomStyle>createStyle({ prefix: marginBottomPrefix, value })
}

/**
 * Creates a margin left style concatenating the margin left prefix and the given value
 * 
 * @see marginLeftPrefix constant for the prefix
 * @see MarginLeftStyle type for return type
 * @see createStyle function for the style creation
 * 
 * @param value - The value for margin left node
 * @returns The margin left style
 */
const createMarginLeftStyle = ( value: SizeBasic ): MarginLeftStyle => {
    return <MarginLeftStyle>createStyle({ prefix: marginLeftPrefix, value })
}

/**
 * Validates the given value to create a margin all nodes style
 * 
 * @see MarginAllProps interface for the margin all properties
 * @see createMarginAllStyle function for the style creation
 * 
 * @param MarginAllProps - The value for all margin nodes
 * @returns The margin all nodes style
 */
const validateMarginAllStyle = ( { margin }: MarginAllProps ): string => {
    return margin ? createMarginAllStyle(margin) : ""
}

/**
 * Validates the given margin right and left values to create a margin right and left style
 * 
 * @see MarginXNodesProps interface for the properties
 * @see createMarginRightStyle function for the margin right style
 * @see createMarginLeftStyle function for the margin left style
 * 
 * @param MarginXNodesProps - The values of the margin X nodes style properties
 * @returns The margin right and left nodes style
 */
const validateMarginXNodesStyle = ( { marginRight, marginLeft }: MarginXNodesProps ): string => {
    const marginRightStyle: string = marginRight ? ` ${createMarginRightStyle(marginRight)}` : ""
    const marginLeftStyle: string = marginLeft ? ` ${createMarginLeftStyle(marginLeft)}` : ""
    return `${marginRightStyle}${marginLeftStyle}`
}

/**
 * Validates the given margin X, top and bottom values to create a margin X or top and bottom style
 * 
 * @see MarginXAndNodesProps interface for the properties
 * @see createMarginXStyle function for the margin X style
 * @see validateMarginXNodesStyle function for the margin right and left style
 * 
 * @param MarginXAndNodesProps - The values of the margin X, right and left style properties
 * @returns The margin X, or right and left nodes style
 */
const validateMarginXAndNodesStyle = ( { 
    marginX, marginRight, marginLeft 
}: MarginXAndNodesProps ): string => {
    return marginX 
         ? ` ${createMarginXStyle(marginX)}` 
         : validateMarginXNodesStyle({ marginRight, marginLeft })
}

/**
 * Validates the given margin top and bottom values to create a margin top and bottom style
 * 
 * @see createMarginTopStyle function for the margin top style
 * @see createMarginBottomStyle function for the margin bottom style
 * 
 * @param MarginYNodesProps - The values of the margin Y nodes style
 * @returns The margin top and bottom nodes style
 */
const validateMarginYNodesStyle = ( { marginTop, marginBottom }: MarginYNodesProps ): string => {
    const marginTopStyle: string = marginTop ? ` ${createMarginTopStyle(marginTop)}` : ""
    const marginBottomStyle: string = marginBottom ? ` ${createMarginBottomStyle(marginBottom)}` : ""
    return `${marginTopStyle}${marginBottomStyle}`
}

/**
 * Validates the given margin Y, top and bottom values to create a margin Y or top and bottom style
 * 
 * @see MarginYAndNodesProps interface for the properties
 * @see createMarginYStyle function for the margin Y style
 * @see validateMarginYNodesStyle function for the margin top and bottom style
 * 
 * @param MarginYAndNodesProps - The values of the margin Y, top and bottom style properties
 * @returns The margin Y, or top and bottom nodes style
 */
const validateMarginYAndNodesStyle = ( { 
    marginY, marginTop, marginBottom 
}: MarginYAndNodesProps ): string => {
    return marginY 
         ? ` ${createMarginYStyle(marginY)}` 
         : validateMarginYNodesStyle({ marginTop, marginBottom })
}

/**
 * Validates the margin X and Y style properties to create a margin X and Y style
 * 
 * @see MarginXYStyle interface for the properties
 * @see createMarginXStyle function for the margin X style
 * @see createMarginYStyle function for the margin Y style
 * 
 * @param MarginXYProps - The values of the margin X and Y style
 * @returns The margin X and Y style
 */
const validateMarginXYStyle = ( { marginX, marginY }: MarginXYProps ): string => {
    const marginXStyle: string = marginX ? ` ${createMarginXStyle(marginX)}` : ""
    const marginYStyle: string = marginY ? ` ${createMarginYStyle(marginY)}` : ""
    return `${marginXStyle}${marginYStyle}`
}

/**
 * Validates the margin style properties to create a margin style
 * 
 * @see MarginProps interface for the margin properties
 * @see createMarginAllStyle function for the margin style
 * @see createsMarginXStyle function for the margin X style
 * @see createMarginYStyle function for the margin Y style
 * @see validateMarginXNodesStyle function for the margin X nodes style
 * @see validateMarginYNodesStyle function for the margin Y nodes style
 * 
 * @param MarginProps - The values of the margin properties
 * @returns The margin style
 */
export const validateMarginStyle = ( { 
    margin, marginX, marginY, marginTop, marginRight, marginBottom, marginLeft 
}: MarginProps ): string => {
    const marginStyle: string = validateMarginAllStyle({ margin })
    const marginXStyle: string = validateMarginXAndNodesStyle({ marginX, marginRight, marginLeft })
    const marginYStyle: string = validateMarginYAndNodesStyle({ marginY, marginTop, marginBottom })
    return marginStyle || `${marginXStyle}${marginYStyle}`
}
