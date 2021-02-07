
import {
    WrapperStyles
} from "./Wrapper.styles"

const Wrapper = ({children, view}) => {
    return (
        <WrapperStyles view={view}>
            {children}
        </WrapperStyles>
    )
}

export default Wrapper