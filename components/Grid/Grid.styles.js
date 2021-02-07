import styled from "styled-components"

export const GridStyles = styled.div`
    display: grid;
    grid-gap: ${({gridGap}) => gridGap};;
    row-gap: ${({rowGap}) => rowGap};
    column-gap: ${({columnGap}) => columnGap};
    grid-template-rows: ${({rows}) => rows};
    grid-template-columns: ${({columns}) => columns};
`