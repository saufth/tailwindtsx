import { SizeNumeric, SizeBasic } from "./sizing"

/** Padding all style property */
export interface PaddingAllProps {
    /** Padding all */
    padding?: SizeNumeric
}

/** Padding X style properties */
interface PaddingXProps {
    /** Padding X */
    paddingX?: SizeNumeric
}

/** Padding Y style properties */
interface PaddingYProps {
    /** Padding Y */
    paddingY?: SizeNumeric
}

/** Padding right and left nodes style properties */
export interface PaddingXNodesProps {
    /** Padding right */
    paddingRight?: SizeNumeric
    /** Padding left */
    paddingLeft?: SizeNumeric
}

/** Padding top, and bottom style properties */
export interface PaddingYNodesProps {
    /** Padding top */
    paddingTop?: SizeNumeric
    /** Padding bottom */
    paddingBottom?: SizeNumeric
}

/** Padding X, right and left style properties */
export interface PaddingXAndNodesProps extends PaddingXProps, PaddingXNodesProps {}

/** Padding Y, right and left style properties */
export interface PaddingYAndNodesProps extends PaddingYProps, PaddingYNodesProps {}

/** Padding top, right, bottom and left style properties */
export interface PaddingNodesProps extends PaddingXNodesProps, PaddingYNodesProps {}

/** Padding X and Y style properties */
export interface PaddingXYProps extends PaddingXProps, PaddingYProps {}

/** Padding style properties */
export interface PaddingProps extends PaddingAllProps, PaddingXYProps, PaddingNodesProps {}

/** Padding style prefixes */
export type PaddingStylePrefix = "p-" 
                               | "px-" 
                               | "py-" 
                               | "pt-" 
                               | "pr-" 
                               | "pb-" 
                               | "pl-"

/** Padding for all nodes styles */
export type PaddingAllStyle = "p-0" 
                            | "p-px" 
                            | "p-0.5" 
                            | "p-1" 
                            | "p-1.5" 
                            | "p-2" 
                            | "p-2.5" 
                            | "p-3" 
                            | "p-3.5" 
                            | "p-4" 
                            | "p-5" 
                            | "p-6" 
                            | "p-7" 
                            | "p-8" 
                            | "p-9" 
                            | "p-10" 
                            | "p-11" 
                            | "p-12" 
                            | "p-14" 
                            | "p-15" 
                            | "p-16" 
                            | "p-20" 
                            | "p-24" 
                            | "p-28" 
                            | "p-32" 
                            | "p-36" 
                            | "p-40" 
                            | "p-44" 
                            | "p-48" 
                            | "p-52" 
                            | "p-56" 
                            | "p-60" 
                            | "p-64" 
                            | "p-72" 
                            | "p-80" 
                            | "p-96"

/** Padding X styles */
export type PaddingXStyle = "px-0" 
                          | "px-px" 
                          | "px-0.5" 
                          | "px-1" 
                          | "px-1.5" 
                          | "px-2" 
                          | "px-2.5" 
                          | "px-3" 
                          | "px-3.5" 
                          | "px-4" 
                          | "px-5" 
                          | "px-6" 
                          | "px-7" 
                          | "px-8" 
                          | "px-9" 
                          | "px-10" 
                          | "px-11" 
                          | "px-12" 
                          | "px-14" 
                          | "px-15" 
                          | "px-16" 
                          | "px-20" 
                          | "px-24" 
                          | "px-28" 
                          | "px-32" 
                          | "px-36" 
                          | "px-40" 
                          | "px-44" 
                          | "px-48" 
                          | "px-52" 
                          | "px-56" 
                          | "px-60" 
                          | "px-64" 
                          | "px-72" 
                          | "px-80" 
                          | "px-96"

/** Padding Y styles */
export type PaddingYStyle = "py-0" 
                          | "py-px" 
                          | "py-0.5" 
                          | "py-1" 
                          | "py-1.5" 
                          | "py-2" 
                          | "py-2.5" 
                          | "py-3" 
                          | "py-3.5" 
                          | "py-4" 
                          | "py-5" 
                          | "py-6" 
                          | "py-7" 
                          | "py-8" 
                          | "py-9" 
                          | "py-10" 
                          | "py-11" 
                          | "py-12" 
                          | "py-14" 
                          | "py-15" 
                          | "py-16" 
                          | "py-20" 
                          | "py-24" 
                          | "py-28" 
                          | "py-32" 
                          | "py-36" 
                          | "py-40" 
                          | "py-44" 
                          | "py-48" 
                          | "py-52" 
                          | "py-56" 
                          | "py-60" 
                          | "py-64" 
                          | "py-72" 
                          | "py-80" 
                          | "py-96"

/** Padding top styles */
export type PaddingTopStyle = "pt-0" 
                            | "pt-px" 
                            | "pt-0.5" 
                            | "pt-1" 
                            | "pt-1.5" 
                            | "pt-2" 
                            | "pt-2.5" 
                            | "pt-3" 
                            | "pt-3.5" 
                            | "pt-4" 
                            | "pt-5" 
                            | "pt-6" 
                            | "pt-7" 
                            | "pt-8" 
                            | "pt-9" 
                            | "pt-10" 
                            | "pt-11" 
                            | "pt-12" 
                            | "pt-14" 
                            | "pt-15" 
                            | "pt-16" 
                            | "pt-20" 
                            | "pt-24" 
                            | "pt-28" 
                            | "pt-32" 
                            | "pt-36" 
                            | "pt-40" 
                            | "pt-44" 
                            | "pt-48" 
                            | "pt-52" 
                            | "pt-56" 
                            | "pt-60" 
                            | "pt-64" 
                            | "pt-72" 
                            | "pt-80" 
                            | "pt-96"

/** Padding right styles */
export type PaddingRightStyle = "pr-0" 
                              | "pr-px" 
                              | "pr-0.5" 
                              | "pr-1" 
                              | "pr-1.5" 
                              | "pr-2" 
                              | "pr-2.5" 
                              | "pr-3" 
                              | "pr-3.5" 
                              | "pr-4" 
                              | "pr-5" 
                              | "pr-6" 
                              | "pr-7" 
                              | "pr-8" 
                              | "pr-9" 
                              | "pr-10" 
                              | "pr-11" 
                              | "pr-12" 
                              | "pr-14" 
                              | "pr-15" 
                              | "pr-16" 
                              | "pr-20" 
                              | "pr-24" 
                              | "pr-28" 
                              | "pr-32" 
                              | "pr-36" 
                              | "pr-40" 
                              | "pr-44" 
                              | "pr-48" 
                              | "pr-52" 
                              | "pr-56" 
                              | "pr-60" 
                              | "pr-64" 
                              | "pr-72" 
                              | "pr-80" 
                              | "pr-96"

/** Padding bottom styles */
export type PaddingBottomStyle = "pb-0" 
                               | "pb-px" 
                               | "pb-0.5" 
                               | "pb-1" 
                               | "pb-1.5" 
                               | "pb-2" 
                               | "pb-2.5" 
                               | "pb-3" 
                               | "pb-3.5" 
                               | "pb-4" 
                               | "pb-5" 
                               | "pb-6" 
                               | "pb-7" 
                               | "pb-8" 
                               | "pb-9" 
                               | "pb-10" 
                               | "pb-11" 
                               | "pb-12" 
                               | "pb-14" 
                               | "pb-15" 
                               | "pb-16" 
                               | "pb-20" 
                               | "pb-24" 
                               | "pb-28" 
                               | "pb-32" 
                               | "pb-36" 
                               | "pb-40" 
                               | "pb-44" 
                               | "pb-48" 
                               | "pb-52" 
                               | "pb-56" 
                               | "pb-60" 
                               | "pb-64" 
                               | "pb-72" 
                               | "pb-80" 
                               | "pb-96"

/** Padding left styles */
export type PaddingLeftStyle = "pl-0" 
                             | "pl-px" 
                             | "pl-0.5" 
                             | "pl-1" 
                             | "pl-1.5" 
                             | "pl-2" 
                             | "pl-2.5" 
                             | "pl-3" 
                             | "pl-3.5" 
                             | "pl-4" 
                             | "pl-5" 
                             | "pl-6" 
                             | "pl-7" 
                             | "pl-8" 
                             | "pl-9" 
                             | "pl-10" 
                             | "pl-11" 
                             | "pl-12" 
                             | "pl-14" 
                             | "pl-15" 
                             | "pl-16" 
                             | "pl-20" 
                             | "pl-24" 
                             | "pl-28" 
                             | "pl-32" 
                             | "pl-36" 
                             | "pl-40" 
                             | "pl-44" 
                             | "pl-48" 
                             | "pl-52" 
                             | "pl-56" 
                             | "pl-60" 
                             | "pl-64" 
                             | "pl-72" 
                             | "pl-80" 
                             | "pl-96"

/** Padding styles */
export type PaddingStyle = PaddingAllStyle 
                         | PaddingXStyle 
                         | PaddingYStyle 
                         | PaddingTopStyle 
                         | PaddingRightStyle 
                         | PaddingBottomStyle 
                         | PaddingLeftStyle

/** Margin all style property */
export interface MarginAllProps {
    /** Margin all */
    margin?: SizeBasic
}

/** Margin X style properties */
interface MarginXProps {
    /** Margin X */
    marginX?: SizeBasic
}

/** Margin Y style properties */
interface MarginYProps {
    /** Margin Y */
    marginY?: SizeBasic
}

/** Margin right and left style properties */
export interface MarginXNodesProps {
    /** Margin right */
    marginRight?: SizeBasic
    /** Margin left */
    marginLeft?: SizeBasic
}

/** Margin top and bottom style properties */
export interface MarginYNodesProps {
    /** Margin top */
    marginTop?: SizeBasic
    /** Margin bottom */
    marginBottom?: SizeBasic
}

/** Margin X, right and left style properties */
export interface MarginXAndNodesProps extends MarginXProps, MarginXNodesProps {}

/** Margin Y, right and left style properties */
export interface MarginYAndNodesProps extends MarginYProps, MarginYNodesProps {}

/** Margin top, right, bottom and left style properties */
export interface MarginNodesProps extends MarginXNodesProps, MarginYNodesProps {}

/** Margin X and Y style properties */
export interface MarginXYProps extends MarginXProps, MarginYProps {}

/** Margin style properties */
export interface MarginProps extends MarginAllProps, MarginXYProps, MarginNodesProps {}

/** Padding and margin style properties */
export interface SpaceProps extends PaddingProps, MarginProps {}

/** Margin style prefixes */
export type MarginStylePrefix = "m-" 
                              | "mx-" 
                              | "my-" 
                              | "mt-" 
                              | "mr-" 
                              | "mb-" 
                              | "ml-"

/** Margin for all nodes styles */
export type MarginAllStyle = "m-0" 
                           | "m-px" 
                           | "m-0.5" 
                           | "m-1" 
                           | "m-1.5" 
                           | "m-2" 
                           | "m-2.5" 
                           | "m-3" 
                           | "m-3.5" 
                           | "m-4" 
                           | "m-5" 
                           | "m-6" 
                           | "m-7" 
                           | "m-8" 
                           | "m-9" 
                           | "m-10" 
                           | "m-11" 
                           | "m-12" 
                           | "m-14" 
                           | "m-15" 
                           | "m-16" 
                           | "m-20" 
                           | "m-24" 
                           | "m-28" 
                           | "m-32" 
                           | "m-36" 
                           | "m-40" 
                           | "m-44" 
                           | "m-48" 
                           | "m-52" 
                           | "m-56" 
                           | "m-60" 
                           | "m-64" 
                           | "m-72" 
                           | "m-80" 
                           | "m-96" 
                           | "m-auto"

/** Margin X styles */
export type MarginXStyle = "mx-0" 
                         | "mx-px" 
                         | "mx-0.5" 
                         | "mx-1" 
                         | "mx-1.5" 
                         | "mx-2" 
                         | "mx-2.5" 
                         | "mx-3" 
                         | "mx-3.5" 
                         | "mx-4" 
                         | "mx-5" 
                         | "mx-6" 
                         | "mx-7" 
                         | "mx-8" 
                         | "mx-9" 
                         | "mx-10" 
                         | "mx-11" 
                         | "mx-12" 
                         | "mx-14" 
                         | "mx-15" 
                         | "mx-16" 
                         | "mx-20" 
                         | "mx-24" 
                         | "mx-28" 
                         | "mx-32" 
                         | "mx-36" 
                         | "mx-40" 
                         | "mx-44" 
                         | "mx-48" 
                         | "mx-52" 
                         | "mx-56" 
                         | "mx-60" 
                         | "mx-64" 
                         | "mx-72" 
                         | "mx-80" 
                         | "mx-96"
                         | "mx-auto"

/** Margin Y styles */
export type MarginYStyle = "my-0" 
                         | "my-px" 
                         | "my-0.5" 
                         | "my-1" 
                         | "my-1.5" 
                         | "my-2" 
                         | "my-2.5" 
                         | "my-3" 
                         | "my-3.5" 
                         | "my-4" 
                         | "my-5" 
                         | "my-6" 
                         | "my-7" 
                         | "my-8" 
                         | "my-9" 
                         | "my-10" 
                         | "my-11" 
                         | "my-12" 
                         | "my-14" 
                         | "my-15" 
                         | "my-16" 
                         | "my-20" 
                         | "my-24" 
                         | "my-28" 
                         | "my-32" 
                         | "my-36" 
                         | "my-40" 
                         | "my-44" 
                         | "my-48" 
                         | "my-52" 
                         | "my-56" 
                         | "my-60" 
                         | "my-64" 
                         | "my-72" 
                         | "my-80" 
                         | "my-96"
                         | "my-auto"

/** Margin top styles */
export type MarginTopStyle = "mt-0" 
                           | "mt-px" 
                           | "mt-0.5" 
                           | "mt-1" 
                           | "mt-1.5" 
                           | "mt-2" 
                           | "mt-2.5" 
                           | "mt-3" 
                           | "mt-3.5" 
                           | "mt-4" 
                           | "mt-5" 
                           | "mt-6" 
                           | "mt-7" 
                           | "mt-8" 
                           | "mt-9" 
                           | "mt-10" 
                           | "mt-11" 
                           | "mt-12" 
                           | "mt-14" 
                           | "mt-15" 
                           | "mt-16" 
                           | "mt-20" 
                           | "mt-24" 
                           | "mt-28" 
                           | "mt-32" 
                           | "mt-36" 
                           | "mt-40" 
                           | "mt-44" 
                           | "mt-48" 
                           | "mt-52" 
                           | "mt-56" 
                           | "mt-60" 
                           | "mt-64" 
                           | "mt-72" 
                           | "mt-80" 
                           | "mt-96"
                           | "mt-auto"

/** Margin right styles */
export type MarginRightStyle = "mr-0" 
                             | "mr-px" 
                             | "mr-0.5" 
                             | "mr-1" 
                             | "mr-1.5" 
                             | "mr-2" 
                             | "mr-2.5" 
                             | "mr-3" 
                             | "mr-3.5" 
                             | "mr-4" 
                             | "mr-5" 
                             | "mr-6" 
                             | "mr-7" 
                             | "mr-8" 
                             | "mr-9" 
                             | "mr-10" 
                             | "mr-11" 
                             | "mr-12" 
                             | "mr-14" 
                             | "mr-15" 
                             | "mr-16" 
                             | "mr-20" 
                             | "mr-24" 
                             | "mr-28" 
                             | "mr-32" 
                             | "mr-36" 
                             | "mr-40" 
                             | "mr-44" 
                             | "mr-48" 
                             | "mr-52" 
                             | "mr-56" 
                             | "mr-60" 
                             | "mr-64" 
                             | "mr-72" 
                             | "mr-80" 
                             | "mr-96"
                             | "mr-auto"

/** Margin bottom styles */
export type MarginBottomStyle = "mb-0" 
                              | "mb-px" 
                              | "mb-0.5" 
                              | "mb-1" 
                              | "mb-1.5" 
                              | "mb-2" 
                              | "mb-2.5" 
                              | "mb-3" 
                              | "mb-3.5" 
                              | "mb-4" 
                              | "mb-5" 
                              | "mb-6" 
                              | "mb-7" 
                              | "mb-8" 
                              | "mb-9" 
                              | "mb-10" 
                              | "mb-11" 
                              | "mb-12" 
                              | "mb-14" 
                              | "mb-15" 
                              | "mb-16" 
                              | "mb-20" 
                              | "mb-24" 
                              | "mb-28" 
                              | "mb-32" 
                              | "mb-36" 
                              | "mb-40" 
                              | "mb-44" 
                              | "mb-48" 
                              | "mb-52" 
                              | "mb-56" 
                              | "mb-60" 
                              | "mb-64" 
                              | "mb-72" 
                              | "mb-80" 
                              | "mb-96"
                              | "mb-auto"

/** Margin left styles */
export type MarginLeftStyle = "ml-0" 
                            | "ml-px" 
                            | "ml-0.5" 
                            | "ml-1" 
                            | "ml-1.5" 
                            | "ml-2" 
                            | "ml-2.5" 
                            | "ml-3" 
                            | "ml-3.5" 
                            | "ml-4" 
                            | "ml-5" 
                            | "ml-6" 
                            | "ml-7" 
                            | "ml-8" 
                            | "ml-9" 
                            | "ml-10" 
                            | "ml-11" 
                            | "ml-12" 
                            | "ml-14" 
                            | "ml-15" 
                            | "ml-16" 
                            | "ml-20" 
                            | "ml-24" 
                            | "ml-28" 
                            | "ml-32" 
                            | "ml-36" 
                            | "ml-40" 
                            | "ml-44" 
                            | "ml-48" 
                            | "ml-52" 
                            | "ml-56" 
                            | "ml-60" 
                            | "ml-64" 
                            | "ml-72" 
                            | "ml-80" 
                            | "ml-96"
                            | "ml-auto"

/** Margin styles */
export type MarginStyle = MarginAllStyle 
                        | MarginXStyle 
                        | MarginYStyle 
                        | MarginTopStyle 
                        | MarginRightStyle 
                        | MarginBottomStyle 
                        | MarginLeftStyle

/** Spacing style prefixes */
export type SpacingStylePrefix = PaddingStylePrefix | MarginStylePrefix

/** Spacing styles */
export type SpacingStyle = PaddingStyle | MarginStyle
