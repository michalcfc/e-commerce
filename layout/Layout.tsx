import { useState } from "react"
import {connect} from 'react-redux';

import Main         from "./components/Main"
import Header       from "./components/Header"
import Footer       from "./components/Footer"
import Wrapper      from "./components/Wrapper"
import AsideLeft    from "./components/AsideLeft"
import AsideRight   from "./components/AsideRight"

import { 
    openCart,
    deleteProduct
  } from "../store/Cart/actions";


const Layout = ({
    children, 
    toggleTheme,
    products,
    deleteProduct,
    lastAddedItem
}) => {
    const [view, setView] = useState(null)
    const [isCartOpen, openCart] = useState<boolean>(false)
    const showLeftAside = view == "withAsides"
    const showRightAside = view == "withAsides"

    const menuLinks = [
        {
            name: 'Contact'
        },
        {
            name: 'Wishlist'
        }
    ]
    return (
        
        <Wrapper view={view}>
            <Header 
                data={products}
                links={menuLinks}
                setView={setView} 
                openCart={openCart}
                isCartOpen={isCartOpen}
                toggleTheme={toggleTheme}
            />
            <AsideLeft 
                isDisplay={showLeftAside} 
            />
            <Main
                lastAddedItem={lastAddedItem}
            >
                {children}
            </Main>
            <AsideRight
                isFixed
                data={products}
                closeCart={openCart}
                isDisplay={isCartOpen} 
                deleteProduct={deleteProduct}
            />
            <Footer/>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        products: state.cart.products,
        openCart: state.cart.openCart,
        lastAddedItem: state.cart.lastAddedItem
      }
    };
  
  const mapDispatchToProps = dispatch => {
    return {
        deleteProduct: (id) => dispatch(deleteProduct(id)),
    }
  }

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Layout)