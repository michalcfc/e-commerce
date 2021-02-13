import {
    BrandLogo,
    HeaderWrapper,
    HeaderContent
} from "./Header.styles"

import Menu from "./components/Menu"
import Select from "@components/Select"
import Search from "@components/Search"
import Button from "@components/Button"

const Header = ({
    setView, 
    links, 
    toggleTheme,
    isCartOpen,
    openCart
}) => {
    const options = [
        {
            value: 1,
            label: 'fullWidth'
        },
        {
            value: 2,
            label: 'withAsides'
        }
    ]

    const selectedLayout = (e) => {
        const view = options
        .filter(option => e.target.value == option.value).pop()
        setView(view.label)
    }

    return (
        <HeaderWrapper>
            <HeaderContent>
            <BrandLogo>Demo Store</BrandLogo>
            {/* <Select 
                onChange={(e) => selectedLayout(e)}
                defaultOptions={options}
            /> */}
            <Button 
                name="Toggle theme"
                onClick={() => toggleTheme()}
            />
            <Search />
            <Menu 
                links={links}
                isCartOpen={isCartOpen}
                openCart={openCart}
            />
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header