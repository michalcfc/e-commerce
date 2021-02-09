
import {
    AsideWrapper
} from "./AsideRight.styles"

const AsideRight = ({isDisplay}) => {
    return (
        <>
        {isDisplay && <AsideWrapper>
            AsideRight
        </AsideWrapper>
        }
        </>
    )
}

export default AsideRight