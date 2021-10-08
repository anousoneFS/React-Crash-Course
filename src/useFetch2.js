import { useState, useEffect } from "react"

function useFetch2(url) {
    const [data, setData] = useState("")

    async function getData(url) {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
    }
    useEffect(() => {
        getData(url)
    }, [])

    if (!data) {
        return []
    }
    return data
}

export default useFetch2
