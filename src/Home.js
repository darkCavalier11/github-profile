import React, { useEffect, useState } from 'react'
import './Home.css'
import Card from './Card'

function Home() {
    const [fav, setFav] = useState([]);
    const user = JSON.parse(localStorage.getItem('user'))
    useEffect(()=>{
      if(user)
        setFav(user.savedProfiles);
    }, [])
    return (
        <div className="home">
            <h1 className="home__legend">Favourites</h1>
            <div className="home__container">
                {fav.map(item => (
                    <Card src={item.avatar_url} name={item.login} data={item}></Card>
                ))}
            </div>
        </div>
    )
}

export default Home
