import React, { Component } from 'react'
import { Table, Button } from "reactstrap"
import alertify from "alertifyjs"

export default class ProductList extends Component {
    addToCart=(product)=>{
        alertify.error(product.name, 2);
    }
    render() {
        return (
            <div>
                <h6>{this.props.info.title} - {this.props.currentCategory}</h6>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Desc</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name} </td>
                                <td>{product.desc} </td>
                                <td>{product.price} </td>
                                <td><Button onClick={()=>this.addToCart(product)} color="info">add</Button> </td>                                
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
