import React from 'react'
import { 
    Card, 
    CardContent, 
    CardActions, 
    Divider,
    Container
} from '@mui/material'
import { Link } from 'react-router-dom'
import LogIn from './LogIn'
import Map from './Map'
import MapContainer from './MapContainer'

const Listings = (props) => {
    return (
        <div className="card-container">
            {props.businesses.map((business, index) => (
                <Card key={index} className="card">
                    <CardContent className="text-gray">
                        <span>{business.name.toUpperCase()}</span>
                        <ul>
                        <li>Location: {business["location"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/business/${business.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    )
}

export default Listings