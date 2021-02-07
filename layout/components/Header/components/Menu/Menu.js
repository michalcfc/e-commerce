import {
    MenuWrapper,
    MenuItem
} from "./Menu.styles"

import Icon from "components/Icons/Bag"

const Menu = ({links}) => {
    return (
        <MenuWrapper>
            {links.map((link, id) => {
               return <MenuItem key={id}>{link.name}</MenuItem> 
            })}
            <Icon/>
            <MenuItem>Hi, Michal</MenuItem>
        </MenuWrapper>
    )
}

export default Menu