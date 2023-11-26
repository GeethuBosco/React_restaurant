import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Row, Image, ListGroup, ListGroupItem } from 'react-bootstrap'


function RestaurantDetails() {

  const params = useParams()
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
  useEffect(() => {
    fetchData()
  }, [])

  const restDetails = items.find((item) => (
    item.id == params.id
  ))
  console.log(restDetails);
  return (
    <div>
      {
        restDetails ? (
          <Row>
            <Col>
              <Image className='m-5' style={{ width: "80%", height:"70%"}} src={restDetails.photograph} fluid />
            </Col>
            <Col>
              <h3 className='m-5' >{restDetails.name}</h3>
              <h4 className='m-5' >Cuisine : {restDetails.cuisine_type}</h4>
              
              <h4 className='m-5' >Address : {restDetails.address}</h4>
              <h4 className='m-5' >Near : {restDetails.neighborhood}</h4>
              <ListGroup>Operating_hours:
                <ListGroup.Item>Monday : {restDetails.operating_hours.Monday}</ListGroup.Item>
                <ListGroup.Item>Tuesday : {restDetails.operating_hours.Tuesday}</ListGroup.Item>
                <ListGroup.Item>Wednesday : {restDetails.operating_hours.Wednesday}</ListGroup.Item>
                <ListGroup.Item>Thursday : {restDetails.operating_hours.Thursday}</ListGroup.Item>
                <ListGroup.Item>Friday : {restDetails.operating_hours.Friday}</ListGroup.Item>
                <ListGroup.Item>Saturday : {restDetails.operating_hours.Saturday}</ListGroup.Item>
                <ListGroup.Item>Sunday : {restDetails.operating_hours.Sunday}</ListGroup.Item>

              </ListGroup>
              
            </Col>
            
            
          </Row>
        ) : ''
      }
    </div>
  )
}

export default RestaurantDetails