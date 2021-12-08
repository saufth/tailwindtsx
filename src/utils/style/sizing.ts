import { Size, SizeProps, WidthPrefixes, HeightPrefixes } from "../../types/style/sizing"

/** Width prefix */
export const widthPrefix: WidthPrefixes = "w-";
/** Maximum width prefix */
export const maxWidthPrefix: WidthPrefixes = "max-w-";
/** Minimum width prefix */
export const minWidthPrefix: WidthPrefixes = "min-w-";
/** Height prefix */
export const heightPrefix: HeightPrefixes = "h-";
/** Maximum height prefix */
export const maxHeightPrefix: HeightPrefixes = "max-h-";
/** Minimum height prefix */
export const minHeightPrefix: HeightPrefixes = "min-h-";

export const createWidthStyle = ( width?: Size ): string => {
    return width ? ` ${ widthPrefix }${ width }` : ""
}

export const createHeightStyle = ( height?: Size ): string => {
    return height ? ` ${ heightPrefix }${ height }` : ""
}

export const validateSizeStyle = ( { width, height }: SizeProps ): string => {
    return `${ createWidthStyle( width ) }${ createHeightStyle( height ) }`
}