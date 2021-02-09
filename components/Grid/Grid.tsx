
import {
    GridStyles
} from "./Grid.styles"

import { GridProps } from "./Grid.d"


const Grid: React.FC<GridProps> = ({
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