import React from "react"
import Product from "./Product"
import { Link, Route, useRouteMatch } from "react-router-dom"
import Container from "@mui/material/Container"

const Products = ({ match }) => {
    const { url } = useRouteMatch()
    const productData = [
        {
            id: 0,
            name: "football",
            description: "this is popular football expensive",
            status: "available",
        },
        {
            id: 1,
            name: "food",
            description: "this is popular food expensive",
            status: "Out of Stock",
        },
        {
            id: 2,
            name: "house",
            description: "this is popular house expensive",
            status: "available",
        },
        {
            id: 3,
            name: "car",
            description: "this is popular car expensive",
            status: "Out of Stock",
        },
    ]

    let linkList = productData.map((item) => (
        <li key={item.id}>
            <Link to={`${url}/${item.id}`}>{item.name}</Link>
        </li>
    ))

    return (
        <Container>
            <div>
                <h2>Products</h2>
                <ul>{linkList}</ul>
            </div>
            <Route path={`${url}/:productId`}>
                <Product data={productData} />
            </Route>
            <Route path={`${url}`} exact>
                <div>
                    <h2>Pleas select item</h2>
                </div>
            </Route>
        </Container>
    )
}

export default Products
