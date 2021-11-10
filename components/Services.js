import React,{useState, useEffect, useContext} from 'react'
import Image from 'next/image'
import {Container,Row,Col,Card,Button,Tabs,Tab} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-scroll'
import  {useRouter}  from 'next/router'
import Hear from '../components/shared/Hear'

const Services = ({servicesData}) => {

    
    const  index  = ''

    useEffect(() => {
        let val = ' '
        val = index
        if(val){
            window.scrollTo(0,2560,{ 
                behavior: 'auto'
              }); 
        }
        val=' '
    },[])

    const [key, setKey] = useState(index?index:'webdesign');

    const showTab = (title) => {
        if(title==="DESIGN & DEVELOPMENT"){
            setKey('webdesign')
        }else if(title==="E-Commerce"){
            setKey('ecommerce')
        }else if(title==="WEB APPLICATION"){
            setKey('webapp')
        }else if(title==="MOBILE APP"){
            setKey('mobileapp')
        }else if(title==="DATA SCRAPING"){
            setKey('datascrap')
        }else if(title==="ARTIFICIAL INTELLIGENCE"){
            setKey('ai')
        }else if(title==="DOT NET SOLUTION"){
            setKey('dotnet')
        }else if(title==="CUSTOMIZED BUSINESS SOLUTION"){
            setKey('custom')
        }else if(title==="SHOPIFY DEVELOPMENT"){
            setKey('shopify')
        }
    }

return (
    <>
    <div className="service-styles" >
        <div className="hero">
            <Container className="py-2">
                <Row className="justify-content-center text-center my-5">
                    <Col>
                        <h1 className="heading">OUR SERVICES</h1>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className="services">
        <Container className="py-2 my-5">
            <Row className="justify-content-center text-center">
                {
                servicesData.map((service,index)=>{
                    return(
                    <Col key={index} xs="auto" md="auto" className="my-3">
                        <Card className="cards">
                            <Image src={`/${service.path}`} alt="service" width={200} height={180} />
                            <Card.Body className="card-body">
                            <Card.Title className="card-title">{service.title}</Card.Title>
                            <Card.Text className="card-text">{service.desc}</Card.Text>
                            <Link to="tabs" duration={100} spy={true} smooth={true}><Button className="btn" onClick={()=>showTab(service.title)} variant="outline-dark">Read More</Button></Link>
                        </Card.Body>
                        </Card>
                    </Col>
                    )
                })
                }
            </Row>
        </Container>
        </div>
        <div className="best-services">
        <Container className="py-5">
            <Row className="justify-content-center my-5 py-3 text-center">
            <Col><h1 className="white-light"> OUR BEST <span className="blue-dark"> SERVICES </span></h1></Col>
            </Row>
            <Row className="justify-content-center my-5 py-5 text-center">
            <Col md={4} className="my-3">
                <div className="best-service my-2">
                    <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
                    <h5 className="service-head my-3">DOT NET CORE SOLUTIONS</h5>
                    <p className="service-desc my-3">
                        .NET core is the next big thing after the release of revolutionary .NET and .NET 2.0. 7CTECH
                        has been working and developing solutions using Microsoft .NET core technologies.</p>
                        <Link to="tabs" className="linkService" duration={100} spy={true} smooth={true}>
                            <button className="service-btn px-5 py-2" onClick={()=>showTab("DOT NET SOLUTION")}>MORE DETAILS</button></Link>
                </div>
            </Col>
            <Col md={4} className="my-3">
                <div className="best-service my-2">
                    <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
                    <h5 className="service-head my-3">CUSTOMIZED BUSINESS SOLUTIONS</h5>
                    <p className="service-desc my-3 mb-5">
                    If you have a killer idea or a great startup thought lingering around in your mind for a long time?...</p>
                    <Link to="tabs" className="linkService" duration={100} spy={true} smooth={true}>
                        <button className="service-btn mt-3 px-5 py-2" onClick={()=>showTab("CUSTOMIZED BUSINESS SOLUTION")}>MORE DETAILS</button></Link>
                </div>
            </Col>
            <Col md={4} className="my-3">
                <div className="best-service my-2">
                    <FontAwesomeIcon className="icon" icon={faCheckCircle}/>
                    <h5 className="service-head my-3">SHOPIFY DEVELOPMENT</h5>
                    <p className="service-desc my-3 mb-5">
                    Shopify is one of the biggest E-Commerce platforms and enablers and one of the best optimized one.</p>
                    <Link to="tabs" className="linkService" duration={100} spy={true} smooth={true}>
                        <button className="service-btn mt-3 px-5 py-2" onClick={()=>showTab("SHOPIFY DEVELOPMENT")}>MORE DETAILS</button></Link>
                </div>
            </Col>
            </Row>
        </Container>
        </div>
        
                <Hear/>

        <div className="my-5" >
            <Container className="pt-3" style={{minHeight:"915px"}} id="tabs">
                <Row className="justify-content-center text-center my-5">
                    <Col md="auto" sm="auto"><h1 className="grey-medium"> THINGS WE CAN <span className="blue-medium"> DO FOR YOU </span></h1></Col>
                </Row>
                <Row className="justify-content-center">
                    <Col>
                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" >
                    <Tab eventKey="webdesign" title="Web Design">
                        <div className="grey mx-5">
                            <p className="grey">
                                Outsource your web designing and development needs to 7CTECH and significantly improve your profit.7CTECH have quality web 
                                designers and developers well versed in latest technologies and trends working under very experienced and understanding project managers.
                            </p>
                            <p><b>Why outsource to 7CTECH?</b></p>
                            <ul>
                                <li>Cost effective due to low development cost.</li>
                                <li>Deep attention to details.</li>
                                <li>Excellent communication architecture.</li>
                                <li>SEO friendly (On-page SEO)</li>
                                <li>Mobile friendly (Responsive)</li>
                                <li>Fresh design (Creativity)</li>
                            </ul>
                            <p><b>Overview of services:</b></p>
                            <p>7CTECH have dedicated teams and individual resources offering following services.</p>
                            <p><b>WordPress: </b> One of the MOST used Off the shelf CMS. 7CTECH have experts who can work on WordPress development and management to deep expertise.</p>
                            <p><b>ReactJS: </b> One or the upcoming modern platforms for the front end development. Making the development of dynamic front ends and responsive behavior a fun job.</p>
                            <p><b>NodeJS: </b> Upcoming technology for creating very time sensitive and powerful web based APIs as well as web applications.</p>
                            <p><b>Custom HTML: </b> 7CTECH has a huge list of great HTML platforms developed for many clients as well as we take proud in a big store designed and developed by our highly motivated front end and UX developers.</p>
                            <p><b>PSD designing: </b> After so many years PSD templates are still proving to be a main platform for the front end designing, not only for the web but also mobile applications and web applications.</p>
                        </div>
                    </Tab>
                    <Tab eventKey="ecommerce" title="E-Commerce">
                        <div className="grey mx-5">
                            <p className="grey">
                                <b>E-Commerce Development is one of the most expensive services offered in USA, Australia, Europe and UAE.</b>
                                If you are a digital agency or an individual looking to get there business fully online with an online E-Commerce store, 
                                then contact 7CTECH now and get the best ROI. We not only develop the E-Commerce solutions 
                                but also look after the final delivery until it is reached to maturity and starts making real ROI.
                            </p>
                            <p>Following are the services offered by 7CTECH in context of E-Commerce solutions</p>
                            
                            <p><b>Magento:</b></p>
                            <p>One of the most used E-Commerce solution, and one of the most powerful as well! Magento offers a extremely long list of options 
                                and features that can cover any kind of requirement that you may have.</p>
                            <p><b>Custom E-Commerce:</b></p>
                            <p>You may have the need for a B2B solution? Or you may need a customized solution? Go ahead and contact 7CTECH right away. We can create and deliver any kind of service that you may need.</p>
                            <p><b>POS Integration:</b></p>
                            <p>7CTECH have integrated different POS as well as ERP solution with there many different E-Commerce solutions. As in today’s world there is a shear need for connection in-store POS systems or inventory 
                                management of the ERP solutions with the online E-Commerce solutions. This will not only make your online store more realistic but also make inventory management easy across all your systems .</p>
                            <p><b>WooCommerce:</b></p>
                            <p>Best solution for small businesses and is based on one of the most used CMS in the world WordPress.</p>
                            <p><b>Other Systems:</b></p>
                            <p>7CTECH also offers E-Commerce development in other platforms like Shopify, OpenCart, PrestaShop and many more.</p>
                            <p>If you have need for any of these please don’t hesitate and contact now.</p>
                          </div>
                    </Tab>
                    <Tab eventKey="webapp" title="WEB Apps">
                        <div className="grey mx-5">
                            <p className="grey">
                            One of the main expertise of 7CTECH is Customized Web Based Solutions Development.</p>
                            <p>You may be a business that is looking to automate any of it’s BPO or you are a digital agency/software house that 
                                wants to develop a customized business solution for a certain agency, If so then 7CTECH is the best bet for you.</p>
                            <p><b>We have developed:</b></p>
                            <ul>
                                <li>B2B Services Listing System (BeopaarHub)</li>
                                <li>Local Craftsmen Services Listing</li>
                                <li>Customized and as per requirements Lead Management System.</li>
                                <li>Child Security and School Management System.</li>
                                <li>Economical Management Systems</li>
                                <li>Laboratory Report Cloud System</li>
                                <li>Medical Lab Management System</li>
                                <li>Supply Chain System</li>
                            </ul>
                           </div>
                    </Tab>
                    <Tab eventKey="mobileapp" title="Mobile Apps">
                        <div className="grey mx-5">
                            <p className="grey">
                            In today’s world no business is complete without a proper Mobile Application for offering there services.</p>
                            <p>Mobile Applications not only create an environment for selling your services but it also brings all your services and 
                                products right at the finger tips of your end customer.</p>
                            <p>7CTECH have mastered the art of creating mobile applications that offer the best of both worlds. Namely cost effectiveness and functionality.</p>
                            <p>Following are the frameworks/Platforms that we offer Mobile Development services on.</p>
                            <p><b>Ionic – Cordova – Responsive and Hybrid Apps:</b></p>
                            <p>With the convergence of technology to generalized standards it is high-time that businesses understand and adapt the magic of hybrid applications.</p>
                            <p>Hybrid Application solutions from 7CTECH offer you great flexibility and cost effectiveness for getting your idea off the ground.</p>
                            <p>The hybrid app development department at 7CTECH is full of Quality and Speed Junkies. They will never settle for anything less then the best of the best.</p>
                            <p><b>Native Mobile Application Development: (iOS and Android)</b></p>
                            <p>With the advent of powerful hybrid technologies there seems to be less need for native Development. But 7CTECH understands the need of highly specialized and targeted 
                                solution. Often times companies and startups would need very targeted and highly specialized services to be offered in mobile applications and some times these 
                                things are not optimal to do with hybrid platforms. For example graphics intensive applications are best written in native technologies and targeted platforms.
                            </p>
                            <p>We at 7CTECH believe that each client has unique needs and requirements should be monitored and studied before suggesting a solution.</p>
                            <p>If you have any idea or need about mobile based solution then please do not hesitate to get free consultation and tell us more about your wish list. We would love 
                                to listen and suggest best solutions possible.
                            </p>
                           </div>
                    </Tab>
                    <Tab eventKey="datascrap" title="Data Scrapping">
                        <div className="grey mx-5">
                            <p className="grey">
                            If you are in business of collecting data from online resources or automating any of your business process then 7CTECH is the best partner you can get.</p>
                            <p>
                                For last 10 years 7CTECH has worked on scraping and analyzing huge quantities for different clients.
                            </p>
                            <p>We offer:</p>
                            <ul>
                                <li>Data Scrapers</li>
                                <li>Data Mining Systems</li>
                                <li>Text Mining Solutions</li>
                                <li>Big Data Analysis</li>
                                <li>Purchasing and Selling Bots</li>
                                <li>API integrations</li>
                                <li>Process Automation</li>
                            </ul>
                           </div>
                    </Tab>
                    <Tab eventKey="ai" title="Artificial Inteligence">
                        <div className="grey mx-5">
                            <p className="grey">
                            It is soon to be time that many of the manual labor jobs are replaced by the AI (Artificial Intelligence). As scary as it may seem this is the 
                            unavoidable outcome of the technology growth that is happening now a days. 7CTECH understands that! And we offer best possible Python based AI 
                            and deep learning solutions.
                            </p>
                            <p>We offer:</p>
                            <ul>
                                <li>TensorFlow Based Solutions</li>
                                <li>AI Bots</li>
                                <li>AI Chatting Systems.</li>
                                <li>Non-Invasive Client Servicing Bots.</li>
                            </ul>
                           </div>
                    </Tab>
                    <Tab eventKey="dotnet" title=".NET">
                        <div className="grey mx-5">
                            <p className="grey">
                            .NET core is the next big thing after the release of revolutionary .NET and .NET 2.0. 7CTECH has been working and developing solutions 
                            using Microsoft .NET core technologies like WPF, WCF and razer pages.
                            </p>
                            <p>We have developed highly optimized, Architectural and design patterns driven solutions. Out expertise with Microsoft .NET technologies comprise of:</p>
                            <ul>
                                <li>CQRS (Command Query Responsibility Separation) and Databus patterns driven API development.</li>
                                <li>Big data manipulation.</li>
                                <li>High availability and highly reliable system design and development.</li>
                                <li>Real time Write through cache implementation using proprietary concurrent accessible solutions.</li>
                                <li>Razer pages based web development.</li>
                                <li>.NET MVC based web applications and web solutions development.</li>
                                <li>React.JS implementation inside .NET MVC.</li>
                            </ul>
                           </div>
                    </Tab>
                    <Tab eventKey="custom" title="Custom Business Solution">
                        <div className="grey mx-5">
                            <p className="grey">
                            If you have a killer idea or a great startup thought lingering around in your mind for a long time? Or you want to have a nice mobile application for the online E-Commerce 
                            that you have. But you have limited budget as well as you do not know the detailed technical aspect of how it gets executed.Then you do not need to worry any more.
                            </p>
                            <p>
                            7CTECH offers end to end project based outsourcing services. We at 7CTECH believe that a project does not only depend on creating what is asked for rather we 
                            believe in creating and taking proud in success. We at 7CTECH believe that any project trusted in us completes when it is a success in terms of achieving the 
                            goals for which our clients start/conceptualize there projects and products.End-to-end project based development services of 7CETCH can be the best way to 
                            create you next great idea from just an idea to a reality. We will develop it, nourish it and stay beside you until the full maturity of your idea to a stagring success.
                            </p>
                            
                           </div>
                    </Tab>
                    <Tab eventKey="shopify" title="Shopify">
                        <div className="grey mx-5">
                            <p className="grey">
                                Shopify is one of the biggest E-Commerce platforms and enablers and one of the best optimized one. 7CTECH has been providing services regarding the platform 
                                since many years now. With the emphises on custom configures and rich store fronts and POS development.
                            </p>
                            <ul>
                                <li>Storefront synchronization with the POS systems.</li>
                                <li>Inventory management.</li>
                                <li>Off Shopify shipping ,tracking and user management integration.</li>
                                <li>Shopify plugin development , installation and configurations.</li>
                                <li>Stripe and PayPal custom integrations.</li>
                                <li>Plan (subscriptions) based sale system development.</li>
                                <li>Shopify Admin API implementation with custom management console development.</li>
                                <li>Shopify Graph API implementation for your ease of customer and services management.</li>
                            </ul>
                           </div>
                    </Tab>
                    </Tabs>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>  
    </>
    )
}

export default Services
