import React,{useContext} from 'react'
import {BlogContext} from '../../context/BlogContextProvider'

import Image from 'next/image'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

import Router from 'next/router'

const Footer = () => {

    const blogs = useContext(BlogContext)||[]

    return (
        <div className="footer-styles">
        <div className="footer py-5">
        <Container className=" py-5">
            <Row className="justify-content-center middle">
            <Col className="my-2" md={3}>
                <Image  src="/logo.png" alt="blog" width={155} height={50} />
                <div className="mt-3" style={{color:"rgb(137, 169, 181)",fontSize:"15px"}}>
                Our prime focus is to offer flawless services over a longer 
                period of time so that our customers can get maximum benefit. 
                Our professionals realize the fact that customer satisfaction 
                is the key to success.
                </div>
            </Col>

            <Col className="middle" md={3} style={{color:"white"}}>
                <div className="footer-white-light mx-4">RECENT POSTS</div>
                <div className="my-5"></div>
                {
                    blogs.slice(0,3).map((blog,index)=>{
                        return(
                            <div className="blog-list" key={index}>
                                <Row className="justify-content-center  px-2">
                                <Col md="auto">
                                    <div><img className="footer-blog" src={blog.imgurl} alt="Blog" /></div>
                                </Col>
                                <Col md={6}>
                                    <Link href={`/blogs/${(blog.slug)}`}><a className="footer-blog-content my-2">{blog.title}</a></Link>
                                </Col>
                                { index!=2 && <hr className="text-center mx-5 my-3" style={{width:"200px",textAlign:"center"}}/>}
                                </Row>
                                
                            </div>
                        )
                    })
                }
            </Col>
            <Col className="" md={3}>
            <div className="footer-white-light middle">EMAIL US</div>
                <Row className="middle">
                <Col>
                    <form className="footer-form mt-5">
                        <input className="my-3 field" type="text" placeholder="email" />
                        <input className="my-3 field" type="text" placeholder="phone" />
                        <input className="my-3 field" type="text" placeholder="email" />
                        <textarea className="my-3 field" type="text" placeholder="Message" rows="4" cols="50" />
                    <div className="my-3"><Button style={{width:"250px"}} className="home-submit" variant="light">Submit</Button></div>
                    </form>
                </Col>
                </Row>
            </Col>
            <Col className="" md={3}>
            <div className="footer-white-light">CONTACT US</div>
            <p className="footer-blog-content mt-5"><span><FontAwesomeIcon icon={faMapMarkerAlt} /></span> Address :</p>
            <p className="footer-blog-content">252D, Shahrah-e-Faisal, P.E.C.H.S Block 2 Block 6 PECHS,
                Karachi 75400 Pakistan</p>
                <hr className="footer-blog-content"/>
                <div className="links">
                    <div className="my-2">Phone : <span className="blue">+92-342-2686008</span></div>
                    <div className="my-2">Email : <span className="blue">info@7ctech.com</span></div>
                    <div className="my-2">Website : <span className="blue">www.7ctech.com</span></div>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
        <div style={{backgroundColor:"grey",height:"1px"}}></div>
        <div className="footer-end">
            <Container className="py-4">
            <Row>
                <Col xs={12} md={3} className="copyright middle my-3"> 
                <p>2021 © Copyrights <Link href="/"><a style={{textDecoration:"none"}}> 7CTECH</a></Link></p> 
                </Col>
                <Col xs={6} md="auto" className="copyright-nav middle">
                    <Row className="middle">
                        <Col md={5} className="middle move-left-a" >
                        <span className="mx-4"><Link href="/"><a className="copyright-a">Home</a></Link></span>
                        <span style={{fontSize:"25px"}}>|</span>
                        <span className="mx-4"><Link href="/"><a className="copyright-a">About</a></Link></span>
                        <span style={{fontSize:"25px"}}>|</span>
                        <span className="mx-4"><Link href="/"><a className="copyright-a">Services</a></Link></span>
                        </Col>
                        <Col md={5} className="middle move-left-b">
                        <span className="disappear" style={{fontSize:"25px"}}>|</span>
                        <span className="mx-4"><Link href="/"><a className="copyright-a">Outsource</a></Link></span>
                        <span style={{fontSize:"25px"}}>|</span>
                        <span className="mx-4"><Link href="/"><a className="copyright-a">Blogs</a></Link></span>
                        <span style={{fontSize:"25px"}}>|</span>
                        <span className="mx-4"><Link href="/"><a className="copyright-a">ContactUs</a></Link></span>
                        </Col>
                    </Row>
                    
                    
                </Col>
                <Col xs={12} md={2} className="my-2 middle">
                    <span className="mx-2"><Link href="/"><a><FontAwesomeIcon style={{color:"rgb(66, 103, 178)",fontSize:"20px"}} icon={faFacebookF} /></a></Link></span>
                    <span className="mx-2"><Link href="/"><a><FontAwesomeIcon style={{color:"rgb(0, 178, 255)",fontSize:"23px"}} icon={faLinkedinIn} /></a></Link></span>
                    <span className="mx-2"><Link href="/"><a><FontAwesomeIcon style={{color:"rgb(0, 178, 255)",fontSize:"20px"}} icon={faTwitter} /></a></Link></span>
                </Col>
            </Row>
            </Container>
        </div>
        </div>
    )
}

export default Footer