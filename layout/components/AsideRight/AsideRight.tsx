
import {
    AsideWrapper,
    AsideContent,
    AsideItems,
    AsideItem,
    AsideExit,
} from "./AsideRight.styles"

import Trash from "../../../components/Icons/Trash"
import Cross from "../../../components/Icons/Cross"

import Button from "@components/Button"


import { 
    AsideRightProps
 } from "./AsideRight.d"

const AsideRight:React.FC<AsideRightProps> = ({
    isFixed,
    isDisplay,
    closeCart
}) => {
    return (
        <>
        {isDisplay && 
        <AsideWrapper isFixed={isFixed}>
            <AsideContent>
            <AsideExit
                onClick={() => closeCart(false)}
            ><Cross />
            </AsideExit>
            <AsideItems>
                <AsideItem>
                    <span>Apple iMac 27-inch</span>
                    <Trash 
                        color="red" 
                    />
                </AsideItem>
                <AsideItem>
                    <span>Apple iMac 27-inch</span>
                    <Trash 
                        color="red" 
                    />
                </AsideItem>
            </AsideItems>
            <Button 
                name="Back to shopping"
                onClick={() => closeCart(false)}
                />
            </AsideContent>
        </AsideWrapper>
        }
        </>
    )
}

export default AsideRight