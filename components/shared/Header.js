import React,{useState,useEffect} from 'react'
import {Nav,Navbar,Container,Row,Col} from 'react-bootstrap'
import Image from 'next/image'
import Link from 'next/link'
import aos from 'aos'
import 'aos/dist/aos.css'
import Router from 'next/router'
import { useSession, signIn, signOut } from "next-auth/react"
const Header = () => {

    const [showList,setShowList] = useState(false)
    
    const { data: session, status } = useSession()
    const isUser = !!session?.user

    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        aos.init({duration:500});
        
    }, [])

    const menuLogic = () => {
        setShowList(false);
        setExpanded(!expanded);
    }

    return (
        <div className="header-styles">
          <Navbar  expanded={expanded} expand="lg" fixed="top" bg="white" style={{paddingBottom:"0px",paddingTop:"0px"}}>
            <Container >
            <Navbar.Brand ><Image src="/logotwo.png" alt="7C-Tech" width={170} height={65} /></Navbar.Brand>
            <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>
                <Nav >
                <Nav className="navLink"><Link href="/"><a className="nav mx-3" onClick={() => setExpanded(!expanded)}>HOME</a></Link></Nav>
                <Nav className="navLink"><Link href="/aboutus"><a className="nav mx-3" onClick={() => setExpanded(!expanded)}>ABOUT US</a></Link></Nav>
                <Nav className="navLink" style={{cursor:"pointer"}} onMouseEnter={()=>setShowList(true)}  onMouseLeave={()=>setShowList(false)} >
                <Link  href="/services"><a className="nav mx-3" >SERVICES</a></Link>
                { showList &&
                    <div className="dropdown"  data-aos="slide-right" onClick={menuLogic} >
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'webdesign',},}}><a className="navitem">DESIGN & DEVELOPMENT</a></Link></Col></Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'ecommerce',},}}><a className="navitem">E-COMMERCE</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'webapp',},}}><a className="navitem">WEB APPLICATION</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'mobileapp',},}}><a className="navitem">MOBILE APPLICATION</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'datascrap',},}}><a className="navitem">DATA SCRAPPING</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'ai',},}}><a className="navitem">ARTIFICIAL INTELLIGENCE</a></Link></Col>
                        </Row><hr/>   
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'dotnet',},}}><a className="navitem">DOTNET SOLUTION</a></Link></Col>
                        </Row><hr/>
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'custom',},}}><a className="navitem">CUSTOM BUSSINESS SOLUTIONS</a></Link></Col>
                        </Row><hr/>   
                        <Row className="d-nav"><Col xs={1} md={1} className="col1"><div className="space"></div></Col>
                            <Col className="my-1 col2">
                                <Link href={{pathname: `/services`,query: {index: 'shopify',},}}><a className="navitem">SHOPIFY DEVELOPMENT</a></Link></Col>
                        </Row><hr/>
                    </div>
                }</Nav>
                <Nav className="navLink"><Link href="/outsource"><a className="nav mx-3" onClick={() => setExpanded(!expanded)}>OUTSOURCE</a></Link></Nav>
                <Nav className="navLink"><Link href="/blogs"><a className="nav mx-3" onClick={() => setExpanded(!expanded)}>BLOGS</a></Link></Nav>
                <Nav className="navLink"><Link href="/contact"><a className="nav mx-3" onClick={() => setExpanded(!expanded)}>CONTACT US</a></Link></Nav>
                <Nav className="navLink mx-5">
                    {
                        session ?(<button className="mx-5 btn btn-primary" onClick={() => signOut()}>Log out</button>) : (<></>)
                    }
                </Nav>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>  
        </div>
    )
}

export default Header