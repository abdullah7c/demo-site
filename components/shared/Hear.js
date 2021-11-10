import React from 'react'
import Image from 'next/image'
import { Container,Row,Col } from 'react-bootstrap'

const Hear = () => {
    return (
        <div>
            <div className="home-hear">
                <Container className="home-hear py-5" fluid>
                    <Row className="justify-content-center">
                    <Col className="mx-5" xs="auto" md="auto"><Image  src="/logo.png" alt="User" width={180} height={55} /></Col>
                    <Col className="mx-5 my-3" xs="auto" md="auto"><div className="white">WE&apos;D LOVE TO HEAR FROM YOU</div></Col>
                    <Col className="mx-5 my-2" xs="auto" md="auto"><button className="btn-custom text-center">TALK TO US</button></Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Hear
