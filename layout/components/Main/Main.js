import {
    MainWrapper,MainContainer
} from "./Main.styles"


const Main = ({children}) => {
    return (
        <MainWrapper>
            <MainContainer>
                {children}
            </MainContainer>
        </MainWrapper>
    )
}

export default Main