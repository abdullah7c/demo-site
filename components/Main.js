import React,{useContext, useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import {Container,Row,Col,Button,Card,Form} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faArrowCircleUp,faBars,faPaintBrush,faCartPlus,faMobileAlt,faSearchPlus,faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import Router from 'next/router'
import {BlogContext} from '/context/BlogContextProvider'
import ReactHtmlParser from 'react-html-parser';
import Hear from './shared/Hear'
import emailjs from 'emailjs-com'
import aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {


    const blogState = useContext(BlogContext)||[]
    const [blogs, setBlogs] = useState([])
    const [sent, setSent] = useState(false)

    useEffect(() => {
      setBlogs(blogState)
      aos.init()
    }, [blogState])

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6ravpgv', 'template_lgora9b', form.current, 'user_wV6F2j1wGAcdUkHe7zHTZ')
        .then((result) => {
            console.log(result.text);
            setSent(true)
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
    <div className="home-styles" >
    <div className="hero-image">
    
      <Container className="space">
      <Row className="justify-content-center">
          <Col className="mt-2 mb-5 pb-3" md="auto">
            <div className="hero-text-top">We strive to make sure that the service we deliver is not a complete high quality service, 
              but also an <br/>innovative solution that can ensure return on investment for our clients and ourselves. </div>
          </Col>
        </Row>
        <Row>
        <Col md={3}>
        
        </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={4}>
              <div className="hero-text-middle">
                BUSINESS
                INFORMATION
                SYSTEMS
              </div>
          </Col>
          <Col md={4}>
            <div className="hero-text-middle">
              DRIVEN<br/>
              BY<br/>
              INNOVATION
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
        <Col className="my-2 service-btn-area" md={12}>
          <Button className="service-btn" variant="outline-warning" onClick={()=>Router.push('/services')}>Our Services</Button>
        </Col>
        </Row>
        <Row className="empty-space"></Row>
      </Container>
    </div>
    <div>
      <Container>
        <Row className="justify-content-center my-5 py-5">
          <Col md={5}>
            <div className="my-5"><Image className="my-4" src="/home section.jpg" alt="7C-Tech" width={550} height={500} /></div>
          </Col>
          <Col md={5}>
            <span className="home-text-v1">WHAT IS </span><span className="home-text-v2">7CTECH</span>
            <p className="justify-content-center">7CTECH comprises of experienced and creative designers and web developers. We focus on customer satisfaction
               to build a long term work relationship with our clients. As a web company, our prime focus is to offer 
               flawless services over a longer period of time so that our customers can get maximum benefit. Our 
               professionals realize the fact that customer satisfaction is the key to success. Web design, customer care 
               features and innovative navigation attract the visitors to any website. Modern business depends mainly upon 
               online platforms and business website is the most important tool to stay in touch with customers. 7CTECH 
               offers excellent services at quite reasonable rates. We have kept in mind the limited resources of small 
               businesses and this is why our web company offers such rates that are within the purchasing power of 
               entrepreneurs. Our professionals believe in building credible relationship with clients. Our focus remains on 
               satisfying the needs of our clients. We offer customized services to suit the specific industry and consumer 
               trends. 7CTECH offers all web related services so there is no need to search for multiple service providers.
            </p>
            <div className="empty-space"></div>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="home-what py-5">
      <Container>
        <Row className="justify-content-center ">
            <Col md={10} className="center-responsive" ><span className="home-text-v1 ">WHY CHOOSE </span><span className="home-text-v2">7CTECH</span></Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col md={3} sm={12} className="home-choose-card mx-3 center-responsive my-4">
            <div className="heading">CREDIBILITY <span><FontAwesomeIcon icon={faArrowCircleUp}/></span></div> 
            <p className="content">7CTECH team believes in credibility and reliability. Our professionals know the importance of building a true work relationship.</p>
          </Col>
          <Col md={3} sm={12} className="home-choose-card mx-3 center-responsive my-4">
            <div className="heading">EFFICIENCY <span><FontAwesomeIcon icon={faArrowCircleUp}/></span></div> 
            <p className="content">Efficiency is not a onetime demonstration of expertise. Our web company believes in constant and long term results.</p>
          </Col>
          <Col md={3} sm={12} className="home-choose-card mx-3 center-responsive my-4">
            <div className="heading">ACCOMMODATE <span><FontAwesomeIcon icon={faArrowCircleUp}/></span></div> 
            <p className="content">We believe business depends on its limitations and consumer behavior. This is why we pay attention to what our clients demand.</p>
          </Col>
        </Row>
      </Container>
    </div>
    <div className="home-services">
      <Container>
      <Row className="empty-space"></Row>
        <Row className="justify-content-center py-5">
          <Col className="text-center mx-auto" md={1}><div className="bar-back mx-auto"><FontAwesomeIcon style={{fontSize:"40px",color:"goldenrod"}} className="mt-3 text-center" icon={faBars}/></div></Col>
        </Row>
        <Row className="justify-content-center">
          <Col className="text-center">
            <p style={{lineHeight:"230%"}}><span className="white-light"> OUR </span><span className="white-dark"> SERVICES </span></p>
          </Col>
        </Row>
        <Row className="empty-space"></Row>
        <Row className="justify-content-center my-5">
          <Col className="text-center service" md={3}>
            <FontAwesomeIcon className="my-2" style={{color:"#ffba43",fontSize:"23px"}} icon={faPaintBrush}/>
              <div className="heading my-2">DESIGN &<br/> DEVELOPMENT</div>
              <div className="content my-1">Our dedicated team is working on WordPress, AngulerJS, NodeJS, PSDs and more..</div>
          </Col>
          <Col className="text-center service" md={3}>
            <FontAwesomeIcon className="my-2" style={{color:"#ffba43",fontSize:"23px"}} icon={faCartPlus}/>
              <div className="heading my-2">E-COMMERCE<br/> WEBSITE</div>
              <div className="content my-1">We Offer Customized E-Commerce services along with development in magento, WooCommerce..</div>
          </Col>
          <Col className="text-center service" md={3}>
            <FontAwesomeIcon className="my-2" style={{color:"#ffba43",fontSize:"23px"}} icon={faMobileAlt}/>
              <div className="heading my-2">MOBILE APP<br/> DEVELOPMENT</div>
              <div className="content my-1">We Offer Customized E-Commerce services along with development in magento, WooCommerce..</div>
          </Col>
          <Col className="text-center service" md={3}>
            <FontAwesomeIcon className="my-2" style={{color:"#ffba43",fontSize:"23px"}} icon={faSearchPlus}/>
              <div className="heading my-2">MOBILE APP<br/> DEVELOPMENT</div>
              <div className="content my-1">Data mining systems, text mining solutions, big data Analysis, API Integrations and more..</div>
          </Col>
        </Row>
        <Row className="justify-content-center">
        
      <Col className="my-2 service-btn-area" md={12}>
        <Button className="service-btn" variant="warning" onClick={()=>Router.push('/services')}>VIEW ALL</Button>
      </Col>
      <Row className="empty-space"></Row>
      </Row>
      <Row className="empty-space"></Row>
      <Row className="empty-space"></Row>
      </Container>
    </div>
    <div>
    <Container>
        <Row className="justify-content-center mt-5">
          <Col className="text-center">
            <span className="black-light"> OUR CLIENT </span><span className="blue-dark"> ABOUT US </span>
          </Col>
        </Row>
        <Row className="empty-space"></Row>
        <Row className="justify-content-center my-1">
          <Col className="text-center client my-4" md={4}>
          <Image  src="/user.png" alt="User" width={100} height={100} />
              <div className="content my-1">
              Working together with 7CTECH to launch a website for my new company,was a very good experience
               as it worked out really well, both aesthetically and functionally. I wanted a modern website 
               with added functions & uses and 7CTECH was able to deliver just that. I found them 
               efficient and professional in their mannerism.
              </div>
              <div className="empty-space"></div>
              <div className="mt-5 pt-1 client-name">DAWAR ALI KHAN</div>
              <div className="client-position">CEO – Percept Media</div>
              <FontAwesomeIcon className="mt-2 quote" icon={faQuoteLeft}/>
          </Col>
          <Col className="text-center client my-4" md={4}>
          <Image  src="/user.png" alt="User" width={100} height={100} />
              <div className="content my-1 mb-5">
              It was great working with 7CTECH’s team as they are very accommodating, professional and expert 
              in their field. The best thing about Ubaid was good communication and ability to understand 
              exactly what we wanted. Will not hesitate to work with them again on future projects.
              </div>
              <div className="empty-space"></div>
              <div className="mt-5 pt-4 client-name">FARYAL IFTIKHAR</div>
              <div className="client-position">Marketing Manager – Eventage.</div>
              <FontAwesomeIcon className="mt-2 quote" icon={faQuoteLeft}/>
          </Col>
          <Col className="text-center client my-4" md={4}>
          <Image  src="/user.png" alt="User" width={100} height={100} />
              <div className="content my-1">
              The Umbrella Network was desperately seeking a highly professional web development team to design 
              its website. 7CTECH despite finding them from a random web search we were glad that we made the 
              choice. Extremely talented and highly professional, Both Danish and Ubaid provided a solution 
              which was extremely cost effective and stylish. Keep It Up Guys!
              </div>
              
              <div className="mt-4 pt-4 client-name">ALISTER DSOUZA</div>
              <div className="client-position">Marketing Manager – Eventage.</div>
              <FontAwesomeIcon className="mt-2 quote" icon={faQuoteLeft}/>
          </Col>
        </Row>
      </Container>
    </div>
    


      <Hear/>



    <div className="blog-bg py-5">

    <Container  fluid>
    <Row className="justify-content-center my-5">
          <Col className="text-center my-3" md={4}><span className="black-light"> LATEST FROM </span><span className="blue-dark"> BLOGS </span></Col>
    </Row>  
    <Row className="justify-content-center text-center my-5">
          
          {
            blogs.slice(0,3).map((blog)=>{
              return(
                <Col key={blog.id} className="my-3" style={{width:"355px"}} md={3}>
                  <Card>
                  <img  src={blog.imgurl} alt="blog"  height={165} />
                    <Card.Body>
                      <Card.Title style={{maxHeight:"60px",fontSize:"16px"}}>{blog.title}</Card.Title>
                      <Card.Text style={{maxHeight:"80px",minHeight:"59px",fontSize:"13px"}}>
                      <div className="my-3">{ReactHtmlParser(blog.content.slice(0, 90))}</div>
                      </Card.Text>
                      <button onClick={()=>Router.push(`/blogs/${blog.slug}`)} className="blog-btn-custom"> READ MORE</button>
                    </Card.Body>
                  </Card>
                  </Col>
              )
            })
          }
          
        </Row>
    </Container>
    </div>
    <div className="home-contact py-5">
      <Container className="my-5">
      <Row className="justify-content-center text-center py-3">
        <div className="blue-medium-dark">CONTACT US</div>
      </Row>
      <Row className="justify-content-center my-5">
          <Col className=" my-3" md={4}>
          <ul className="links">
            <li className="my-2">252D, Shahrah-e-Faisal, P.E.C.H.S Block 2 Block 6 PECHS, Karachi 75400 Pakistan</li>
            <li className="my-2">Phone : <span className="blue">+92-342-2686008</span></li>
            <li className="my-2">Email : <span className="blue">info@7ctech.com</span></li>
            <li className="my-2">Website : <span className="blue">www.7ctech.com</span></li>
          </ul>
          </Col>
          <Col className="" md={4}>
            {
              sent === false &&
              <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className="my-4" type="name" name="name" placeholder="Name" />
                <Form.Control className="my-4" type="email" name="email" placeholder="Email" />
                <Form.Control className="my-4" type="name" name="phone" placeholder="Your Phone" />
                <Form.Control className="my-4" name="message" style={{minHeight:"120px"}}  as="textarea" placeholder="Message" />
              </Form.Group>
              <Button className="home-submit" type="submit" variant="light">Submit</Button>
            </Form>
            }
            {
              sent === true &&
              <div data-aos="slide-up"><FontAwesomeIcon style={{fontSize:"150px",color:"green",marginLeft:"150px"}} icon={faCheckCircle} />
              <h5 className="my-2 " style={{marginLeft:"100px"}}>Email Sent Successfully!</h5>
              <div style={{marginTop:"207px"}}></div></div>
            }
            
          </Col>
        </Row>
      </Container>
    </div>
  </div>
    )
}

export default Main
