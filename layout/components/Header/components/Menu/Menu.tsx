import { useState } from "react"

import {
    MenuWrapper,
    MenuItem
} from "./Menu.styles"

import { MenuProps } from "./Menu.d"

import Bag from "components/Icons/Bag"
import Heart from "components/Icons/Heart"


const Menu: React.FC<MenuProps> = ({
    links,
    isCartOpen,
    openCart
}) => {
    return (
        <MenuWrapper>
            {links.map((link, id) => {
               return <MenuItem key={id}>{link.name}</MenuItem> 
            })}
            <MenuItem.Icon>
                <Heart/>
            </MenuItem.Icon>
            
            <MenuItem.Icon 
                onClick={() => openCart(!isCartOpen)}
            >
                <Bag/>
            </MenuItem.Icon>
            <MenuItem>
                Hi, Michal
            </MenuItem>
        </MenuWrapper>
    )
}

export default Menu