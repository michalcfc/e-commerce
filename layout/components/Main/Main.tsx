import { useState, useEffect } from "react"

import {
    MainWrapper,
    MainContainer,
    Notification
} from "./Main.styles"

import { 
    MainProps
 } from "./Main.d"

 const Main:React.FC<MainProps> = ({
     children,
     lastAddedItem
 }) => {
    const [notify, showNotify] = useState(false)

    useEffect(() => {
        showNotify(true)
        return () => {
            setTimeout(() => {
                showNotify(false)
            }, 4000);
        }
    }, [lastAddedItem])

     return (
         <MainWrapper>
             <MainContainer>
                {notify && lastAddedItem && <Notification>
                    {`${lastAddedItem} has been added to your card.`}
                </Notification>}
                 {children}
             </MainContainer>
         </MainWrapper>
     )
 }

export default Main