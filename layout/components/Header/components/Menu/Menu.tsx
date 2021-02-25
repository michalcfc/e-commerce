import { useState } from "react"

import {
    MenuWrapper,
    MenuItem,
    IconText
} from "./Menu.styles"

import { MenuProps } from "./Menu.d"

import Bag from "components/Icons/Bag"
import Heart from "components/Icons/Heart"


const Menu: React.FC<MenuProps> = ({
    links,
    isCartOpen,
    openCart,
    data
}) => {
    return (
        <MenuWrapper>
            {links.map((link, id) => {
               return <MenuItem key={id}>{link.name}</MenuItem> 
            })}
            <MenuItem.Icon>
                <Heart/>
                <IconText>
                    {data.length}
                </IconText>
            </MenuItem.Icon>
            
            <MenuItem.Icon 
                onClick={() => openCart(!isCartOpen)}
            >
                <Bag/>
                <IconText>
                    {data.length}
                </IconText>
            </MenuItem.Icon>
            <MenuItem>
                Hi, Michal
            </MenuItem>
        </MenuWrapper>
    )
}

export default Menu