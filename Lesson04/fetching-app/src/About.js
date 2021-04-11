import React from 'react'

export default function About(fromRouteData) {
    console.log(fromRouteData)
    return (
        <div>
            <h2>About Page</h2>
            <h3>Id: {fromRouteData.match.params.id}</h3>
        </div>
    )
}
