import { Size } from "./sizing"
import { SpacingStyle, SpacingStylePrefix } from "./spacing"

/** Style prefixes */
export type StylePrefix = SpacingStylePrefix 

/** Styles */
export type Style = SpacingStyle

/** Style properties */
export interface StyleProps {
    prefix: StylePrefix
    value: Size
}
