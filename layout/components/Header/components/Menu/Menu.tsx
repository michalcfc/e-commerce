import { useState } from "react"

import {
    MenuWrapper,
    MenuItem
} from "./Menu.styles"

import { MenuProps } from "./Menu.d"

import Bag from "components/Icons/Bag"
import Heart from "components/Icons/Heart"


const Menu: React.FC<MenuProps> = ({
    links
}) => {

    const [isCartOpen, openCart] = useState(false)
    console.log(isCartOpen)

    return (
        <MenuWrapper>
            {links.map((link, id) => {
               return <MenuItem key={id}>{link.name}</MenuItem> 
            })}
            <MenuItem.Icon><Heart/></MenuItem.Icon>
            <MenuItem.Icon onClick={() => openCart(true)}><Bag/></MenuItem.Icon>
            <MenuItem>Hi, Michal</MenuItem>
        </MenuWrapper>
    )
}

export default Menu