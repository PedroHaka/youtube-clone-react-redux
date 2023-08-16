import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Categoriesbar from '../../components/categoriesbar/Categoriesbar'
import Video from '../../components/video/Video'

const HomeScreen = () => {
    return (
        <Container>
            <Categoriesbar />
            <Row>
                {
                    [...new Array(20)].map(() => (
                        <Col lg={3} md={4}>
                            <Video />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}

export default HomeScreen
