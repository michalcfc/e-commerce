import { useState } from "react"

import Main         from "./components/Main"
import Header       from "./components/Header"
import Footer       from "./components/Footer"
import Wrapper      from "./components/Wrapper"
import AsideLeft    from "./components/AsideLeft"
import AsideRight   from "./components/AsideRight"


const Layout = ({children}) => {
    const [view, setView] = useState(null)
    const showLeftAside = view == "withAsides"
    const showRightAside = view == "withAsides"

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
            />
            <AsideLeft isDisplay={showLeftAside} />
            <Main>
                {children}
            </Main>
            <AsideRight isDisplay={showRightAside} />
            <Footer/>
        </Wrapper>
    )
}

export default Layout