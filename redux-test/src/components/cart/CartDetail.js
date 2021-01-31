import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'reactstrap';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavItem,
    NavLink,
    Badge,
} from 'reactstrap';
import { bindActionCreators } from 'redux';
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from '../../redux/actions/cartActions'
import alertify from "alertifyjs";


class CartDetail extends Component {
    removeFromCart = (product)=> {
        this.props.actions.removeFromCart(product)
        alertify.error(product.productName + " sepetten silindi")
    }       
    render() {
        return (
            <div>
                <Table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Desc</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.cart.map(cartItem => (
                        <tr>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.desc}</td>
                            <td>{cartItem.product.price}</td>
                            <td>
                                <Button
                                    color="danger"
                                    onClick={() => this.removeFromCart(cartItem.product)}>
                                    Sil
                                    </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            </div >
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}


function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)