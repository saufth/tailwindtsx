import { ContentOverflow } from "../../types/style/layout"

const createOverflowStyle = ( overflow?: ContentOverflow ): string => {
    return overflow ? ` overflow-${ overflow }` : ""
}

const createOverflowXStyle = ( overflowX?: ContentOverflow ): string => {
    return overflowX ? ` overflow-x-${ overflowX }` : ""
}

const createOverflowYStyle = ( overflowY?: ContentOverflow ): string => {
    return overflowY ? ` overflow-y-${ overflowY }` : ""
}

const validateOverflowXYStyle = ( overflowX?: ContentOverflow, overflowY?: ContentOverflow ): string => {
    return `${createOverflowXStyle( overflowX )}${createOverflowYStyle( overflowY )}`
}

export const validateOverflowStyle = ( overflow?: ContentOverflow, overflowX?: ContentOverflow, overflowY?: ContentOverflow ): string => {
    return createOverflowStyle( overflow ) || validateOverflowXYStyle( overflowX, overflowY )
}
