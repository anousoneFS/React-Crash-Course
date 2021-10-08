import React from "react"
import { useParams } from "react-router-dom"
import Container from "@mui/material/Container"

const Product = ({ data }) => {
    const { productId } = useParams()
    console.log("product id = ", productId)
    const product = data.find((e) => e.id === Number(productId))
    let content
    if (product) {
        content = (
            <div>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <h4>{product.status}</h4>
            </div>
        )
    } else {
        content = (
            <div>
                <h3>sorry does't have product detail</h3>
            </div>
        )
    }
    return (
        <Container>
            <h2>{content}</h2>
        </Container>
    )
}

export default Product
