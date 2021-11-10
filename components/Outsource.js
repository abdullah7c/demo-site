import React from 'react'
import {Container,Row,Col,Card,Button,Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faLaptop,faUser } from '@fortawesome/free-solid-svg-icons'

const Outsource = () => {
    return (
        <>
        <div className="outsource-styles" >
            <div className="hero">
                <Container className="py-2">
                    <Row className="justify-content-center text-center my-5">
                        <Col>
                            <h1 className="heading">OUTSOURCE</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row className="justify-content-center text-center my-5">
                        <Col><div className="black-dark py-4">7CTECH OFFERING FOLLOWING OUTSOURCING SERVICES</div></Col>
                    </Row>
                    <Row className="justify-content-center text-center my-4">
                        <Col xs={2} md={1}><div className="label1">1</div></Col><Col xs={11} md={5}><div className="label1-text">Dedicated Teams (Full Department)</div></Col>
                    </Row>
                    <Row className="justify-content-center text-center my-4">
                        <Col xs={2} md={1}><div className="label2">2</div></Col><Col xs={11} md={5}><div className="label2-text">Project Based</div></Col>
                    </Row>
                    <Row className="justify-content-center text-center my-4">
                        <Col xs={2} md={1}><div className="label3">3</div></Col><Col xs={11} md={5}><div className="label3-text">Dedicated Resource (One or Many)</div></Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                    <Row className="justify-content-center text-center py-5">
                        <Col xs="auto" md="auto"><div className="black-dark">DEDICATED TEAMS VS. PROJECT BASED VS. DEDICATED RESOURCE</div></Col>
                    </Row>
                    <Row className="justify-content-center text-center">
                        <Col md={8} xs="auto">
                        <Table className="table-content" striped bordered>
                            <thead >
                                <tr>
                                <th style={{backgroundColor:"rgb(255, 222, 151)"}}></th>
                                <th style={{color:"#fff",backgroundColor:"purple"}}>DEDICATED TEAM</th>
                                <th style={{color:"#fff",backgroundColor:"rgb(79, 103, 225)"}}>PROJECT BASED</th>
                                <th style={{color:"#fff",backgroundColor:"rgb(0, 188, 212)"}}>DEDICATED RESOURCE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td></td>
                                <td><FontAwesomeIcon className="icon my-1" style={{color:"purple"}} icon={faUsers} /></td>
                                <td><FontAwesomeIcon className="icon my-1" style={{color:"rgb(79, 103, 225)"}} icon={faLaptop} /></td>
                                <td><FontAwesomeIcon className="icon my-1" style={{color:"rgb(0, 188, 212)"}} icon={faUser} /></td>
                                </tr>
                                <tr>
                                <td className="py-5 inside">You will get:</td>
                                <td className="py-5"><div>A dedicated offshore staff or team of professionals who will work exclusively on your project 8 hours a day, 5 days a week</div></td>
                                <td className="py-5">A team of professionals who will work on your requirements on per-project basis</td>
                                <td className="py-5">An individual or more professionals who get hired by you, will work on project 8 hours a day, 5 days a week</td>
                                </tr>
                                <tr>
                                <td className="py-4 inside">How you pay:</td>
                                <td className="py-4">Pay per staff per month</td>
                                <td className="py-4">Pay per project</td>
                                <td className="py-4">Pay per resource per month</td>
                                </tr>
                                <tr>
                                <td className="py-5 inside">Recommended for:</td>
                                <td className="py-5">Augmenting a specific, creative or technical skill gap in your team</td>
                                <td className="py-5">Projects that need both creative and technical expertise</td>
                                <td className="py-5">Lack of specific resource? Hire any individual resource</td>
                                </tr>
                                
                            </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div>
                <Container>
                <Row className="justify-content-center text-center my-4">
                    <Col md={2} xs={2} ><div className="label1">1</div></Col><Col xs={10} ><div className="label1-text">Dedicated Teams (Full Department)</div></Col>
                </Row>
                <Row className="justify-content-center my-4">
                    <Col className="outsource-content px-5" md={10}>
                        <p>
                            Perhaps you want to grow your business quickly and do not want to go into the process of hiring the full team, and managing the complexities of 
                            team creation as well as making sure you have the full technical spectrum?
                        </p>
                        <p>
                            Perhaps you have the diverse needs? You need web development and you need some software developed for it too! But you may need all that for just 6 
                            months or so. No one would like to create a full software department in house for this.</p>
                        <p>
                            7CTECH has expert resources and technically advanced infrastructure. 7CTECH has diverse resources that can be “rented” or “bought” for a certain period 
                            or for “pay as you go”, indefinite time frame.
                        </p>
                        <p>
                            7CTECH has provided such service to the companies in many parts of the world for over decade. Effectively cutting the cost for our happy clients and making 
                            there business grow by heaps. 7CTECH’s dedicated teams are rally the best GROWTH HACK you can have.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center text-center my-4">
                    <Col md={2} xs={2} ><div className="label2">2</div></Col><Col xs={10} ><div className="label2b-text">Project Based</div></Col>
                </Row>
                <Row className="justify-content-center my-4">
                    <Col className="outsource-content px-5" md={10}>
                        <p>
                            Perhaps you want to grow your business quickly and do not want to go into the process of hiring the full team, and managing the complexities of 
                            team creation as well as making sure you have the full technical spectrum?
                        </p>
                        <p>
                            Perhaps you have the diverse needs? You need web development and you need some software developed for it too! But you may need all that for just 6 
                            months or so. No one would like to create a full software department in house for this.</p>
                        <p>
                            7CTECH has expert resources and technically advanced infrastructure. 7CTECH has diverse resources that can be “rented” or “bought” for a certain period 
                            or for “pay as you go”, indefinite time frame.
                        </p>
                        <p>
                            7CTECH has provided such service to the companies in many parts of the world for over decade. Effectively cutting the cost for our happy clients and making 
                            there business grow by heaps. 7CTECH’s dedicated teams are rally the best GROWTH HACK you can have.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center text-center my-4">
                    <Col md={2} xs={2} ><div className="label3">3</div></Col><Col xs={10} ><div className="label3-text">Dedicated Resource (One or Many)</div></Col>
                </Row>
                <Row className="justify-content-center my-4">
                    <Col className="outsource-content px-5" md={10}>
                        <p>
                            Perhaps you want to grow your business quickly and do not want to go into the process of hiring the full team, and managing the complexities of 
                            team creation as well as making sure you have the full technical spectrum?
                        </p>
                        <p>
                            Perhaps you have the diverse needs? You need web development and you need some software developed for it too! But you may need all that for just 6 
                            months or so. No one would like to create a full software department in house for this.</p>
                        <p>
                            7CTECH has expert resources and technically advanced infrastructure. 7CTECH has diverse resources that can be “rented” or “bought” for a certain period 
                            or for “pay as you go”, indefinite time frame.
                        </p>
                        <p>
                            7CTECH has provided such service to the companies in many parts of the world for over decade. Effectively cutting the cost for our happy clients and making 
                            there business grow by heaps. 7CTECH’s dedicated teams are rally the best GROWTH HACK you can have.
                        </p>
                    </Col>
                </Row>
                </Container>
            </div>
        </div>
        </>
    )
}

export default Outsource
