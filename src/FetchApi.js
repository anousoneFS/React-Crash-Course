import React, { useState } from "react"
import Container from "@mui/material/Container"
import useFetch from "./useFetch"
import useFetch2 from "./useFetch2"

const Fetchapi = () => {
    const [num, setNum] = useState(0)

    const data = useFetch("https://jsonplaceholder.typicode.com/users")
    const data2 = useFetch2("https://jsonplaceholder.typicode.com/posts")

    function increment() {
        setNum(num + 1)
    }

    function decrement() {
        setNum(num - 1)
    }

    return (
        <Container style={{ marginTop: 10 }}>
            <h2>{num}</h2>
            <button onClick={() => increment()}>click to increment</button>
            <button onClick={() => decrement()}>click to decrement</button>
            <div>
                <ul>
                    {data.data.map((el) => (
                        <li key={el.id}>{el.name}</li>
                    ))}
                </ul>
                <hr />
                <h1>use fetch 2</h1>
                <ul>
                    {data2.map((el) => (
                        <li>{el.title}</li>
                    ))}
                </ul>
            </div>
        </Container>
    )
}

export default Fetchapi
