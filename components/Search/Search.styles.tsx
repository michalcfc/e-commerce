import styled from "styled-components";

type DataProps = {
    test?: boolean
}

export const SearchStyle = styled.div<DataProps>`
    position: relative
`;

export const SearchList = styled.div<DataProps>`
    position: absolute;
    background: #fff;
    top: 3.2rem;
    border: 1px solid #eee;
    box-shadow: 0px 20px 20px 1px rgb(0 0 0 / 15%)
`;

export const SearchItem = styled.div<DataProps>`
    cursor: pointer;
    padding: 0.5rem 0.5rem;
    background: ${props => props.test ? "palevioletred" : "white"};
    &:hover {
        color: #fff;
        background: indigo;
    }
`;

export const SearchText = styled.div<DataProps>`
    padding: 0.5rem 0.5rem;
`;