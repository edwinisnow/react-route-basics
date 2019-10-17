import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
function ItemDetail({match}) {

    useEffect(()=>{
        fetchItem()
        console.log(match)
    },[])

    const [item, setItem] = useState({});

    const fetchItem= async()=>{
        const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
        const item = await data.json();
        setItem(item);

    }
    return (
        <div>
            <h1>{item.name}</h1>
        </div>
    )
} 

export default ItemDetail
