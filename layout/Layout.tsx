import { useState } from "react"

import Main         from "./components/Main"
import Header       from "./components/Header"
import Footer       from "./components/Footer"
import Wrapper      from "./components/Wrapper"
import AsideLeft    from "./components/AsideLeft"
import AsideRight   from "./components/AsideRight"


const Layout = ({children, toggleTheme}) => {
    const [view, setView] = useState(null)
    const [isCartOpen, openCart] = useState<boolean>(false)
    const showLeftAside = view == "withAsides"
    const showRightAside = view == "withAsides"
    console.log(isCartOpen)

    const menuLinks = [
        {
            name: 'Contact'
        },
        {
            name: 'Wishlist'
        }
    ]
    return (
        <Wrapper view={view}>
            <Header 
                setView={setView} 
                links={menuLinks}
                toggleTheme={toggleTheme}
                isCartOpen={isCartOpen}
                openCart={openCart}
            />
            <AsideLeft 
                isDisplay={showLeftAside} 
            />
            <Main>
                {children}
            </Main>
            <AsideRight
                isFixed
                closeCart={openCart}
                isDisplay={isCartOpen} 
            />
            <Footer/>
        </Wrapper>
    )
}

export default Layout