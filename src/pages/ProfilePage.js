import React from 'react'
import { useParams } from 'react-router'

export default function ProfilePage() {
    const { username } = useParams();
    return (
        <div>
            <h1>Profile page: { username }  </h1>
        </div>
    )
}
