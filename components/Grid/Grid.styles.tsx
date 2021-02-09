import styled from "styled-components"
import { ReactElement } from "react"

type DataProps = {
    rows?: number
    rowGap?: number
    columns?: string
    gridGap?: string
    columnGap?: number
}

export const GridStyles = styled.div<DataProps>`
    display: grid;
    grid-gap: ${({gridGap}) => gridGap};
    row-gap: ${({rowGap}) => rowGap};
    column-gap: ${({columnGap}) => columnGap};
    grid-template-rows: ${({rows}) => rows};
    grid-template-columns: ${({columns}) => columns};
`