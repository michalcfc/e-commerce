
import {
    GridStyles
} from "./Grid.styles"

const Grid = ({
    rows,
    rowGap,
    columns, 
    gridGap,
    children, 
    columnGap
}) => {
    return (
        <GridStyles 
            rows={rows}
            rowGap={rowGap}
            gridGap={gridGap}
            columns={columns}
            columnGap={columnGap}
        >
            {children}
        </GridStyles>
    )
}

export default Grid