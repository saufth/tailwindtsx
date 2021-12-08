import { ContainerProps } from "../../types/style/layout"
import styles from "../../styles/layout.module.css"

/**
 * Container component
 * 
 * @see {@link ContainerProps} for the input data structure
 * 
 * @param containerProps - Container properties
 * @return Container component
 */
const Container = ( { children }: ContainerProps ): JSX.Element => (

    <div className={ styles.container }>
        { children }
    </div>

)

export default Container
