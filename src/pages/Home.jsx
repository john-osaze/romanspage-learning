import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link>
            <br />
            <Link to={"/signin"}>Sign In</Link>
            <br />
            <Link to={"/signup"}>Sign Up</Link>
        </div>
    )
}

export default Home