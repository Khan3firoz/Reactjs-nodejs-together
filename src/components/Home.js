import React from 'react'

const Home = () => {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div>
            <h1>{!data ? "Loading..." : data}</h1>
        </div>
    )
}

export default Home
