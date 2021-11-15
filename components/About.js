import React from 'react'
import Image from 'next/image'
import {Container,Row,Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteRight,faCheckCircle,faCodeBranch,faListUl,faUserCheck,faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Map from './shared/Map'
import Hear from './shared/Hear'
import Link from 'next/link'

const About = () => {
return (
    <>
    <div className="about-styles">
    <div className="hero-image py-2">
    <Container className="py-5">
      <Row className="justify-content-center py-5">
          <Col className="mt-2 mb-5 pb-3 py-5" md="auto">
            <h1 className="hero-text-middle py-5">WE ARE 7CTECH</h1>
            <p className="text-center hero-text-top">
                we strive to make sure that service we deliver is 
                not just a complete high quality service, but 
                also an innovative solution that can assure return 
                on investment for our clients and ourselves.
            </p>
          </Col>
        
          <Row className="justify-content-center text-center">
              <Col xs="auto" md="auto"><button className="btn-custom">Our Services</button></Col>
          </Row>
        
        </Row>
    </Container>
    </div>
    <div>
        <Container>

        <Row className="justify-content-center my-5 pt-5 text-center">
            <Col><h1 className="black-light"> WHAT IS <span className="blue-dark"> 7CTECH </span></h1></Col>
            <div className="about-tag my-1">EXPERIENCED AND CREATIVE DESIGNERS AND WEB DEVELOPERS.</div>
        </Row>
        <Row className="justify-content-center my-5 py-5">
          <Col md={5} className="mx-3">
            <Row>
            <div className="about-what center-responsive">
                <h5 className="mission pt-5 px-5">MISSION STATEMENT</h5>
                <div className="statement py-2 px-5">
                    A close look at “Our Mission” reveals the importance of long term success of the business of our clients. 
                    We have an indirect approach….
                </div>

                <Col className="pb-4" md={{ span: 4, offset: 10 }}><FontAwesomeIcon style={{color:"rgb(188, 198, 205)",fontSize:"32px"}} icon={faQuoteRight}/></Col>
            </div>
            </Row>
          </Col>
          <Col md={5} className="mx-3">
            <p className="my-3 about-mid-text center-responsive">
            <hr className="mx-5"/>
                7CTECH comprises of experienced and creative designers and web developers. We focus on customer 
                satisfaction to build a long term work relationship with our clients. As a technology company, our 
                prime focus is to offer flawless services over a longer period of time so that our customers can get 
                maximum benefit. Our team of professionals realize the fact that customer satisfaction is the key to 
                success. 7CTECH offers excellent services at quite reasonable rates. We have kept in mind the 
                limited resources of small businesses and this is why our company offers such rates that are within 
                the purchasing power of entrepreneurs. Our professionals believe in building credible relationship 
                with clients.
            <hr className="mx-5"/>
            </p>
          </Col>
        </Row>
        </Container>
    </div>
    <div className="best-services">
        <Container className="py-5">
            <Row className="justify-content-center text-center">
            <Col><h1 className="white-light my-3"> OUR BEST <span className="blue-dark"> SERVICES </span></h1></Col>
            </Row>
            <Row className="justify-content-center  py-5 text-center">
            <Col md={4}>
                <div className="best-service my-5">
                    <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
                    <h5 className="service-head my-3">DOT NET CORE SOLUTIONS</h5>
                    <p className="service-desc my-3">
                        .NET core is the next big thing after the release of revolutionary .NET and .NET 2.0. 7CTECH
                        has been working and developing solutions using Microsoft .NET core technologies.</p>
                    <button className="service-btn px-5 py-2">
                        <Link href={{pathname: `/services`,query: {index: 'dotnet',},}}>
                            <a style={{textDecoration:"none",color:"white"}}>MORE DETAILS</a>
                        </Link>
                    </button>
                </div>
            </Col>
            <Col md={4}>
                <div className="best-service my-5">
                    <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
                    <h5 className="service-head my-3">CUSTOMIZED BUSINESS SOLUTIONS</h5>
                    <p className="service-desc my-3 mb-5">
                    If you have a killer idea or a great startup thought lingering around in your mind for a long time?...</p>
                    <button className="service-btn mt-3 px-5 py-2">
                        <Link href={{pathname: `/services`,query: {index: 'custom',},}}>
                            <a style={{textDecoration:"none",color:"white"}}>MORE DETAILS</a>
                        </Link>
                    </button>
                </div>
            </Col>
            <Col md={4}>
                <div className="best-service my-5">
                    <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
                    <h5 className="service-head my-3">SHOPIFY DEVELOPMENT</h5>
                    <p className="service-desc my-3 mb-5">
                    Shopify is one of the biggest E-Commerce platforms and enablers and one of the best optimized one.</p>
                    <button className="service-btn mt-3 px-5 py-2">
                        <Link href={{pathname: `/services`,query: {index: 'shopify',},}}>
                            <a style={{textDecoration:"none",color:"white"}}>MORE DETAILS</a>
                        </Link>
                    </button>
                </div>
            </Col>
            </Row>
        </Container>
    </div>
    


    <Hear/>



    <div>
    <Container className="py-5 my-3">
        <Row className="justify-content-center text-center py-5">
            <Col><h3 className="values mb-5" >OUR CORE VALUES</h3></Col>
        </Row>
        <Row className="justify-content-center mx-1 my-1">
            <Col className="center-responsive" md={4}>
                <Row>
                    <Col md="auto" className="" ><FontAwesomeIcon className=" value-icon my-3" icon={faUserCheck}/></Col>
                    <Col className="my-3" md={8} >
                        <h4 className="values-heading my-2">CLIENT SATISFACTION FIRST</h4>
                        <p>What is the best long term investment? 7CTECH believes that client satisfaction is the best form of long term investment.</p>
                    </Col>
                </Row>
            </Col>
            <Col className="center-responsive" md={4}>
                <Row>
                    <Col md="auto" className="" ><FontAwesomeIcon className=" value-icon my-3" icon={faCodeBranch}/></Col>
                    <Col className="my-3" md={8} >
                        <h4 className="values-heading my-2">INNOVATION AND INTELLECT</h4>
                        <p>What is the best long term investment? 7CTECH believes that client satisfaction is the best form of long term investment.</p>
                    </Col>
                </Row>
            </Col>
            <Col className="center-responsive" md={4}>
                <Row>
                    <Col md="auto" className="" ><FontAwesomeIcon className=" value-icon my-3" icon={faListUl}/></Col>
                    <Col className="my-3" md={8} >
                        <h4 className="values-heading my-2">CORE VALUES OF INTEGRITY</h4>
                        <p>Our professionals realize the fact that business ethics and moral values determine the goodwill of any professional organization.</p>
                    </Col>
                </Row>
            </Col>
          
          
        </Row>
      </Container>  
    </div>

    <div className="">
        <Container className="py-1">
            <Row className="justify-content-center my-5 py-3 text-center">
            <Col><h1 className="black-dark-large">CONNECT WITH<span className="blue-dark"> OUR TEAM </span></h1></Col>
            </Row>
            <Row className="justify-content-center my-5 py-5">
            <Col md={5} className="my-3">
                <div className="team-block">
                    <Row className="p-5">
                    <Col md="auto">
                        <Image  src="/user.png" alt="User" width={70} height={70} />
                    </Col>
                    <Col>
                        <div><h4>Naveed Ahmed Javed</h4>
                        <p>CEO</p>
                        <a className="mail" href=""><FontAwesomeIcon className="" icon={faEnvelope}/> naveed@7ctech.com</a>
                        </div>
                    </Col>
                    </Row>
                </div>
            </Col>
            <Col md={5} className="my-3">
                <div className="team-block">
                    <Row className="p-5">
                    <Col md="auto">
                        <Image  src="/user.png" alt="User" width={70} height={70} />
                    </Col>
                    <Col>
                        <div><h4>Obaid Nizami</h4>
                        <p>PMO</p>
                        <a className="mail" href=""><FontAwesomeIcon className="" icon={faEnvelope}/> obaid@7ctech.com</a>
                        </div>
                    </Col>
                    </Row>
                </div>
            </Col>
            <Col md={5} className="my-3">
                <div className="team-block">
                    <Row className="p-5">
                    <Col md="auto">
                        <Image  src="/user.png" alt="User" width={70} height={70} />
                    </Col>
                    <Col>
                        <div><h4>Mohi uddin</h4>
                        <p>Team Lead</p>
                        <a className="mail" href=""><FontAwesomeIcon className="" icon={faEnvelope}/> mohiudeen@7ctech.com</a>
                        </div>
                    </Col>
                    </Row>
                </div>
            </Col>
            <Col md={5} className="my-3">
                <div className="team-block">
                    <Row className="p-5">
                    <Col md="auto">
                        <Image  src="/user.png" alt="User" width={70} height={70} />
                    </Col>
                    <Col>
                        <div><h4>Faheem</h4>
                        <p>Head of SQA</p>
                        <a className="mail" href=""><FontAwesomeIcon className="" icon={faEnvelope}/> fahim@7ctech.com</a>
                        </div>
                    </Col>
                    </Row>
                </div>
            </Col>
            
            </Row>
        </Container>
    </div>
    <div >
        <Container fluid>
        <Row className="justify-content-center mb-5 ">
            <Col xs={10} md={7}>
            <Map />
            </Col>
        </Row>
        </Container>
    </div>
    </div>
    </>
    )
}

export default About
