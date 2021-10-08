import React from "react"
import { Link, Route, useParams, useRouteMatch } from "react-router-dom"
import Container from "@mui/material/Container"

function Category() {
    const { url, path } = useRouteMatch()
    console.log("url = ", url)
    console.log("path = ", path)
    // console.log(useRouteMatch())
    return (
        <div>
            <ul>
                <li>
                    <Link to={`${url}/shoes`}>shoes</Link>
                </li>
                <li>
                    <Link to={`${url}/Boots`}>Boots</Link>
                </li>
                <li>
                    <Link to={`${url}/footwear`}>footwear</Link>
                </li>
            </ul>
            <Route path={`${path}/:name`}>
                <Item />
            </Route>
        </div>
    )
}

const Item = () => {
    const { name } = useParams()
    console.log("name = ", name)
    return (
        <Container>
            <h3>{name}</h3>
        </Container>
    )
}

export default Category
