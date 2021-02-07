import Link from 'next/link'
import { useState } from "react"
import { SearchProps } from "./Search.d"
import { 
    SearchStyle,
    SearchList,
    SearchItem,
    SearchText
} from "./Search.styles";

import Input from "../Input"

import db from "../../api/db.json"

const ENTER = 13
const ARROW_UP = 40
const ARROW_DOWN = 38
const NO_PRODUCTS_TEXT = "No results. Try again."

const Search: React.FC<SearchProps> = () => {
    const [searchText, setSearchText] = useState('')
    const [autocompletes, setAutocompletes] = useState([])
    const [isAutocomplatesShow, setShowAutocomplates] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(0)

    const handleChange = (e) => {
        const products = db.products
        const searchText = e.target.value
        if (!searchText) {
            setSearchText('')
            setAutocompletes([]) 
        } 
        const filtered = products.filter(product => {
            return product.name
            .toLowerCase()
            .includes(searchText.toLowerCase())
           })
           setSearchText(searchText);
           setAutocompletes(filtered);
      } 

      const onKey = (e) => {
        console.log(selectedProduct, autocompletes.length)
        if(
            e.keyCode === ARROW_UP){
            setSelectedProduct(selectedProduct+1)
        }
        else if (
            e.keyCode === ARROW_DOWN 
            && selectedProduct != 0) {
            setSelectedProduct(selectedProduct-1)
        }
      }

  return (
  <>
    <SearchStyle>
        <Input 
            placeholder="Szukaj"
            onChange={(e) => handleChange(e)}
            value={searchText}
            onKeyUp={(e) => onKey(e)}
            onFocus={() => setShowAutocomplates(true)}
        />
        {isAutocomplatesShow
        && <SearchList onFocus={ () => {console.log('main', 'blur');} }>
        {searchText 
        && !autocompletes.length
        ? <SearchText>{NO_PRODUCTS_TEXT}</SearchText> 
        : searchText 
        && autocompletes.map((product, index) => {
            return (
                <>
                <Link href={`/product/${product.name}`}> 
                    <SearchItem test={index === selectedProduct} key={product.id}>
                            {product.name}
                    </SearchItem>
                </Link>
                </>
            )
        })}
        </SearchList>}
    </SearchStyle>
  </>
  )
}

export default Search;