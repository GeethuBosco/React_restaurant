import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

function RestaurantCard({data}) {
    console.log(data);
  return (
    <Link  to={`restaurant-details/${data.id}`}>
        <div className="mt-3 mx-4">
             <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={data.photograph} className="p-3"/>
          <Card.Body>
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>
             <p>Cusine: {data.cuisine_type}</p>
            </Card.Text>
            <Card.Text>
             <p>{data.neighborhood}</p>
            </Card.Text>
          </Card.Body>
        </Card>
        </div>
    </Link>
  )
}

export default RestaurantCard