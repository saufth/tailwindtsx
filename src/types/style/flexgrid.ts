/** The flex layout allows responsive elements within a container to be automatically arranged depending upon screen size */
import { BoxProps } from "./layout"
import { SizeNumeric } from "./sizing"

/** Direction of flex items. */
export type ContentDirection = "row" 
                             | "col"

/** Position in multi-row flex and grid containers */
export type SimplePosition = "start" 
                           | "center" 
                           | "end"

/** Position in multi-row flex and grid containers */
export type ContentPosition = SimplePosition 
                            | "between" 
                            | "around" 
                            | "evenly"

/** Controlling how flex and grid items are positioned along a container's cross axis */
export type ItemsPosition = SimplePosition 
                          | "baseline" 
                          | "stretch"

export interface FlexboxProps extends BoxProps {
    /** Controlling the direction of flex items */
    readonly direction?: ContentDirection
    /** Set true to position flex items horizontally in the opposite direction */
    readonly directionReverse?: boolean
    /** Controlling how flex items wrap */
    readonly wrap?: boolean
    /** Set true to wrap flex items in the reverse direction */
    readonly wrapReverse?: boolean
    /** Controlling the gutters between grid and flexbox items for X and Y axis */
    readonly gap?: SizeNumeric
    /** Controlling gutters between grid and flexbox items for X axis */
    readonly gapX?: SizeNumeric
    /** Controlling gutters between grid and flexbox items for Y axis */
    readonly gapY?: SizeNumeric
    /** Controlling how flex and grid items are positioned along a container's main axis */
    readonly justifyContent?: ContentPosition
    /** Controlling how rows are positioned in multi-row flex and grid containers */
    readonly alignContent?: ContentPosition
    /** Controlling how flex and grid items are positioned along a container's cross axis */
    readonly alignItems?: ItemsPosition
}
