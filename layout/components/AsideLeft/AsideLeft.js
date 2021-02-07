
import {
    AsideWrapper
} from "./AsideLeft.styles"

const AsideLeft = ({isDisplay}) => {
    return (
        <>
        {isDisplay && 
        <AsideWrapper>
            AsideLeft
        </AsideWrapper>
        }
        </>
    )
}

export default AsideLeft