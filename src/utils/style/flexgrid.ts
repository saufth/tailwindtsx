import { ContentDirection, ContentPosition, ItemsPosition } from "../../types/style/flexgrid"
import { SizeNumeric } from "../../types/style/sizing"

export const createDirectionStyle = ( direction?: ContentDirection, reverse?: boolean ): string => {
    return direction ? ` flex-${ direction }${ reverse ? "-reverse" : "" }` : ""
}

export const createWrapStyle = ( wrap?: boolean, reverse?: boolean ): string => {
    return wrap ? ` flex-wrap${ reverse ? "-reverse": "" }` : ""
}


export const createJustifyContentStyle = ( position?: ContentPosition ): string => {
    return position ? ` justify-${ position }` : ""
}

export const createAlignContentStyle = ( position?: ContentPosition ): string => {
    return position ? ` content-${ position }` : ""
}

export const createAlignItemsStyle = ( position?: ItemsPosition ): string => {
    return position ? ` items-${ position }` : ""
}

const createGapStyle = ( gap?: SizeNumeric ): string => {
    return gap ? ` gap-${ gap }` : ""
}

const createGapXStyle = ( gap?: SizeNumeric ): string => {
    return gap ? ` gap-x-${ gap }` : ""
}

const createGapYStyle = ( gap?: SizeNumeric ): string => {
    return gap ? ` gap-y-${ gap }` : ""
}

const validateGapXYStyle = ( gapX?: SizeNumeric, gapY?: SizeNumeric ): string => {
    return `${createGapXStyle( gapX )}${createGapYStyle( gapY )}`
}

export const validateGapStyle = ( gap?: SizeNumeric, gapX?: SizeNumeric, gapY?: SizeNumeric ): string => {
    return createGapStyle( gap ) || validateGapXYStyle( gapX, gapY )
}
