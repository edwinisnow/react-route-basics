import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
function Shop() {

    useEffect(()=>{
        fetchItems()
    },[])

    const [items, setItem] = useState([]);

    const fetchItems = async()=>{
        const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items = await data.json()
        console.log(items);

        setItem(items.items);
    }
    return (
        <div>
            Shop Page
            {items.map(item=> <h4 key={item.itemid}>
            <Link to={`/shop/${item.itemid}`}>{item.name}</Link>
                </h4>)}
        </div>
    )
} 

export default Shop
