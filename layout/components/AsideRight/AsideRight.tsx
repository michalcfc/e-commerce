
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
    closeCart,
    deleteProduct,
    data
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
                {data.map(product => (
                    <div key={product.id}>
                      <AsideItem>
                          <span>{product.name}</span>
                        <Trash 
                            color="red" 
                            onClick={() => deleteProduct(product.id)}
                        />
                        </AsideItem>
                    </div>
                ))}
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