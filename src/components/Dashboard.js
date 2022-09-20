import React, { useState } from 'react'
import { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { Col, Row } from 'react-bootstrap'


function Dashboard() {
    const [items, setItems] = useState([])

    async function fetchData() {
        await fetch('/restaurants.json')
            .then((result) => {
                result.json()
                    .then((data) => {
                        
                        setItems(data.restaurants)
                    })
            })
    }
    console.log(items);
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Row>
            {
                items.map((item)=>(
                    <Col md={6} lg={4} xl={3}>
                    <RestaurantCard data={item}/>
                    </Col>
                

                ))
            }
        </Row>
    )
}

export default Dashboard