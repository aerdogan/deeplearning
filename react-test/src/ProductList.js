import React, { Component } from 'react'
import { Table } from "reactstrap"

export default class ProductList extends Component {
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
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name} </td>
                                <td>{product.desc} </td>
                                <td>{product.price} </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
