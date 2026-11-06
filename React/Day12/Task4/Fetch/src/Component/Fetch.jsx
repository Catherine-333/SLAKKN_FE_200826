
import { useEffect, useState } from "react"

const Fetch = () => {

    const [userData, setUserdata] = useState([])

    const FetchGet = async () => {

        const respance = await fetch("https://dummyjson.com/products")

        const change = await respance.json()

        setUserdata(change.products)

    }

    useEffect(() => {

        FetchGet()

    }, [])

    return (
        <>
            <div>
                {userData.map((e, i) => (

                    <div key={i}>

                        <img src={e.images[0]} alt="" width="150" />

                        <h1>{e.title}</h1>

                        <p>{e.price}</p>

                    </div>

                ))}
            </div>
        </>
    )
}

export default Fetch
