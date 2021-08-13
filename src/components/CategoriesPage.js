import React from 'react'
import { useLocation, useHistory } from 'react-router'

export default function CategoriesPage() {
    const location = useLocation();
    const history = useHistory();

    const query = new URLSearchParams(location.search);
    const skip = parseInt(query.get("skip") || 0)
    const limit =parseInt (query.get("limit") || 10)
    const handleClick= () => {
     
        query.set("skip", skip + limit)
       // query.set("limit",200)
        history.push({search:query.toString()})

    }

    

    return (
        <div>
            <h1>Categories Page</h1>
            <h5>Skip = {skip}</h5>
            <h5>Limit = {limit}</h5>

            <button onClick={handleClick}>Next</button>
        </div>
    )
}
