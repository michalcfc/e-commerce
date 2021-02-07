import {
    HeaderWrapper,
    HeaderContent
} from "./Header.styles"

import Menu from "./components/Menu"
import Select from "components/Select"
import Search from "components/Search"

const Header = ({setView, links}) => {
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
            <div>Logo</div>
            {/* <Select 
                onChange={(e) => selectedLayout(e)}
                defaultOptions={options}
            /> */}
            <Search />
            <Menu 
                links={links}
            />
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header