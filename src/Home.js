import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from './Card'

function Home() {
    const [fav, setFav] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    return (
        <div className="home">
            <h1>Favourites</h1>
            <div className="home__container">
                {fav.map(item => (
                    <Card></Card>
                ))}
            </div>
        </div>
    )
}

export default Home
