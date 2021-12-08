/** Width style prefixes */
export type WidthPrefixes = "w-" | "max-w-" | "min-w-"

/** Height style prefixes */
export type HeightPrefixes = "h-" | "max-h-" | "min-h-"

/** Sizing style prefixes */
export type SizePrefixes = WidthPrefixes | HeightPrefixes

/** Spacing values of tailwindcss */
export type SizeNumeric = "0"            // Size 0px
                      | "px"            // Size 1px
                      | "0.5"           // Size 0.125rem
                      | "1"             // Size 0.25re
                      | "1.5"           // Size 0.375rem
                      | "2"             // Size 0.5rem
                      | "2.5"           // Size 0.625rem
                      | "3"             // Size 0.75rem
                      | "3.5"           // Size 0.875rem
                      | "4"             // Size 1rem
                      | "5"             // Size 1.25rem
                      | "6"             // Size 1.5rem
                      | "7"             // Size 1.75rem
                      | "8"             // Size 2rem
                      | "9"             // Size 2.25rem
                      | "10"            // Size 2.5rem
                      | "11"            // Size 2.75rem
                      | "12"            // Size 3rem
                      | "14"            // Size 3.5rem
                      | "15"            // Size 3.75rem
                      | "16"            // Size 4rem
                      | "20"            // Size 5rem
                      | "24"            // Size 6rem
                      | "28"            // Size 7rem
                      | "32"            // Size 8rem
                      | "36"            // Size 9rem
                      | "40"            // Size 10rem
                      | "44"            // Size 11rem
                      | "48"            // Size 12rem
                      | "52"            // Size 13rem
                      | "56"            // Size 14rem
                      | "60"            // Size 15rem
                      | "64"            // Size 16rem
                      | "72"            // Size 18rem
                      | "80"            // Size 20rem
                      | "96"            // Size 24rem

/** Spacing values of tailwindcss */
export type SizeFraction = "1/5"        // Size 20%
                         | "1/4"        // Size 25%
                         | "3/10"       // Size 30%
                         | "1/3"        // Size 33.333333%%
                         | "2/5"        // Size 40%
                         | "1/2"        // Size 50%
                         | "3/5"        // Size 60%
                         | "2/3"        // Size 66.666667%
                         | "7/10"       // Size 70%
                         | "3/4"        // Size 75%
                         | "4/5"        // Size 80%
                         | "17/20"      // Size 85%
                         | "9/10"       // Size 90%

/** Automatic size */
export type SizeAuto = "auto"

/** Spacing values of tailwindcss */
export type SizeDefaults = | "min"        // Minimum size
                           | "max"        // Maximum size
                           | "full"       // Size 100%
                           | "screen"     // Virtual screen size

/** Numeric and automatic size */
export type SizeBasic = SizeNumeric | SizeAuto

/** Spacing values of tailwindcss */
export type Size = SizeBasic | SizeFraction | SizeDefaults

/** Width and height of a element */
export interface SizeProps {
    /** Width of a element */
    width: Size
    /** Height of a element */
    height: Size
}
