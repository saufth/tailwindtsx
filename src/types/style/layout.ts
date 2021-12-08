import { ReactNode } from "react"
import { SizeProps } from "./sizing"
import { SpaceProps } from "./spacing"

/** Hoandles content that is too large for the container */
export type ContentOverflow = "auto" 
                            | "hidden" 
                            | "visible" 
                            | "scroll" 

/** Container properties */
export interface ContainerProps {
    /** Container children */
    readonly children?:  ReactNode
}

/** The box layout is a simple container */
export interface BoxProps extends ContainerProps, SizeProps, SpaceProps {
    /** Controlling how an element handles content that is too large for the container for X and Y axis */
    readonly overflow?: ContentOverflow
    /** Controlling how an element handles content that is too large for the container for X axis */
    readonly overflowX?: ContentOverflow
    /** Controlling how an element handles content that is too large for the container for Y axis */
    readonly overflowY?: ContentOverflow
}

