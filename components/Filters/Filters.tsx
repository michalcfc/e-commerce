import React from "react"
import { FiltersStyle } from "./Filters.styles"
import { FiltersProps } from "./Filters.d"

import Checkbox from './../Checkbox';

const Filters: React.FC<FiltersProps> = ({

}) => (
  <FiltersStyle>
    <h2>Kategorie</h2>
    <div>
        <Checkbox/>
        <Checkbox/>
    </div>
    <Checkbox />
  </FiltersStyle>
)

export default Filters;