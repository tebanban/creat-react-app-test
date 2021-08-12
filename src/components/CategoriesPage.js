import React from 'react'
import { useLocation } from 'react-router'

export default function CategoriesPage() {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const skip = query.get("skip") || 0;
    const limit = query.get("limit") || 10

    

    console.log(query);

    return (
        <div>
            <h1>Categories Page</h1>
            <h5>Skip = {skip}</h5>
            <h5>Limit = {limit}</h5>
        </div>
    )
}
