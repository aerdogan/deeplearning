import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from 'reactstrap'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from '../../redux/actions/cartActions'
import alertify from "alertifyjs"
import {Link} from 'react-router-dom'

class CartSummary extends Component {
    removeFromCart = (product)=> {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi")
    }     
    renderEmpty() {
        return (
            <NavItem>
                <NavLink>Sepet Boş</NavLink>
            </NavItem>
        )
    }
    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Sepetiniz
              </DropdownToggle>
                <DropdownMenu right>
                    {this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>X</Badge>
                            {cartItem.product.productName}
                            <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>
                    ))}
                    <DropdownItem divider />
                    <DropdownItem><Link to={"/cart"}>Sepete Git</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        );
    }
    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmpty()}
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)