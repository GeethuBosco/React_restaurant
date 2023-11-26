import React, { useState } from 'react'
import { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { RestaurantsList } from '../actions/restaurantAction'


function Dashboard() {
    // const [items, setItems] = useState([])

    // async function fetchData() {
    //     await fetch('/restaurants.json')
    //         .then((result) => {
    //             result.json()
    //                 .then((data) => {
                        
    //                     setItems(data.restaurants)
    //                 })
    //         })
    // }
 const dispatch = useDispatch()
 const result = useSelector((state)=>state.restaurantReducer)
 const {restaurant} = result
 console.log(`resturest data ${restaurant}`);
    // console.log(items);
    useEffect(() => {
        // fetchData()
        dispatch(RestaurantsList())
    }, [])
    return (
        <Row>
            {
                restaurant.map((item)=>(
                    <Col md={6} lg={4} xl={3}>
                        <RestaurantCard data={item}/>
                    </Col>
                ))
            }
        </Row>
    )
}

export default Dashboard