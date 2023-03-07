import React from 'react'
import { 
    Card, 
    CardContent, 
    CardActions, 
    Divider,
    Container
} from '@mui/material'
import { Link } from 'react-router-dom'
// import businesses from '../businesses.json' // remove this
import LogIn from './LogIn'

const Listings = (props) => {
    return (
        <div className="card-container">
            {/* {console.log(props.businesses[0])} */}
            {/* { {props.businesses.map((business, idx) => (  */}
                <Card key={props.businesses[0].id} className="card">
                    <CardContent className="text-gray">
                        <span>{props.businesses[0].name.toUpperCase()}</span>
                        <ul>
                        <li>Location: {props.businesses[0]["location"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/business/${props.businesses[0].id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            {/* ))} } */}
        </div>
    )
}

export default Listings