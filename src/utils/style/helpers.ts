import { StyleProps, Style } from "../../types/style/style"

export const createStyle = ( { prefix, value }: StyleProps ): Style => {
    return <Style>(`${ prefix }${ value }`)
}
