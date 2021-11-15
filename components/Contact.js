import React,{useState, useRef} from 'react'
import {Container,Row,Col,Form,Button,Tabs,Tab} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faPhone,faGlobe,faEnvelope,faCheckCircle} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Map from './shared/Map'
import Hear from '../components/shared/Hear'
import {Link} from 'react-scroll'
import emailjs from 'emailjs-com'
import aos from 'aos'
import 'aos/dist/aos.css'

const Contact = () => {

    const [key, setKey] = useState('webdesign');
    const [sent, setSent] = useState(false)

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
        <div>
            <div className="contact-styles">
            <div className="hero">
                <Container className="py-2">
                    <Row className="justify-content-center text-center my-5">
                        <Col>
                            <h1 className="heading">CONTACT US</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="my-5 py-5">
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={8} className="">
                        <Map />
                    </Col>
                    <Col md={3}>
                    {
                        sent === false &&
                        <Form ref={form} onSubmit={sendEmail}>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control className="contact-form" name="name" type="text" placeholder="Name *" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control className="contact-form" name="email" type="email" placeholder="Enter Email *" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicPassword">
                            <Form.Control className="contact-form" name="phone" type="number" placeholder="Your Phone *" />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Control as="textarea" name="message" placeholder="Message *" rows={7} />
                        </Form.Group>
                        <Button variant="primary" style={{width:"100%"}} type="submit">
                            Submit
                        </Button>
                    </Form>
                    }
                    {
                        sent === true &&
                        <div data-aos="slide-up">
                            <FontAwesomeIcon className="my-3" style={{fontSize:"100px",color:"green",marginLeft:"10px"}} icon={faCheckCircle} />
                            <h5 className="my-2 " style={{marginLeft:"0px", color:"black"}}>Email Sent Successfully!</h5>
                            <div style={{marginTop:"207px"}}></div>
                        </div>
                    }
                    </Col>
                </Row>
            </Container>
            </div>
            <div className="my-5">
                <Container>
                    <Row className="justify-content-center contact-links">
                        <Col md={3}>
                            <h1 className="brand">7CTECH</h1>
                            <p className="content">Our prime focus is to offer flawless services over a longer period of time so that our customers can get maximum benefit.</p>
                        </Col>
                        <Col md={3} className="content">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Address :</p>
                            <p>252D, Shahrah-e-Faisal, P.E.C.H.S Block 2 Block 6 PECHS,</p>
                            <p>Karachi 75400 Pakistan</p>
                        </Col>
                        <Col md={3} className="content">
                            <p><FontAwesomeIcon icon={faPhone} /> Phone: <a className="link"> +92-342-2686008</a></p>
                            <p><FontAwesomeIcon icon={faEnvelope} /> Email: <a className="link"> info@7ctech.com</a></p>
                            <p><FontAwesomeIcon icon={faGlobe} /> Website: <a className="link">  www.7ctech.com</a></p>
                        </Col>
                        <Col className="social" md={2}>
                            <p><FontAwesomeIcon icon={faFacebookF} className="mx-1" /> Facebook </p>
                            <p><FontAwesomeIcon icon={faTwitter} className="mx-1" /> Twitter </p>
                            <p><FontAwesomeIcon icon={faLinkedinIn} className="mx-1" /> LinkedIn </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="home-contact py-5">
                <Container className="py-5">
                <Row className="justify-content-center text-center py-3">
                    <h1 className="white-medium-dark mt-5">7CTECH</h1>
                    <h1 className="white-medium-dark mt-5">YOUR PERFECT BUSINESS SOLUTION</h1>
                </Row>
                </Container>
                </div>
                <div className="my-5">
                <Container>
                    
                    <Row className="justify-content-center">
                        <Col md={4}>
                        <h4 className="">OUR TEAM</h4>
                        <div className="team-block my-4">
                            <Row className="p-5">
                            <Col md="auto">
                                <Image  src="/user.png" alt="User" width={60} height={60} />
                            </Col>
                            <Col>
                                <div><h4>Naveed Ahmed Javed</h4>
                                <p>CEO</p>
                                <a className="mail" href=""><FontAwesomeIcon className="" icon={faEnvelope}/> naveed@7ctech.com</a>
                                </div>
                            </Col>
                            </Row>
                        </div>
                        <div className="team-block my-4">
                            <Row className="p-5">
                            <Col md="auto">
                                <Image  src="/user.png" alt="User" width={60} height={60} />
                            </Col>
                            <Col>
                                <div><h4>Obaid Nizami</h4>
                                    <p>PMO</p>
                                    <a className="mail" href=""><FontAwesomeIcon className="" icon={faEnvelope}/> obaid@7ctech.com</a>
                                </div>
                            </Col>
                            </Row>
                        </div>
                        <div className="team-block my-4">
                            <Row className="p-5">
                            <Col md="auto">
                                <Image  src="/user.png" alt="User" width={60} height={60} />
                            </Col>
                            <Col>
                                <div><h4>Mohi uddin</h4>
                                <p>Team Lead</p>
                                <a className="mail" href=""><FontAwesomeIcon className="" icon={faEnvelope}/> mohiudeen@7ctech.com</a>
                                </div>
                            </Col>
                            </Row>
                        </div>
                        <div className="team-block my-4">
                            <Row className="p-5">
                            <Col md="auto">
                                <Image  src="/user.png" alt="User" width={60} height={60} />
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
                        <Col md={6}>
                            <h4 className="">OPEN VACANCIES</h4>
                            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3" >
                    <Tab eventKey="webdesign" title="FLUTTER / HYBRID MOBILE APP DEVELOPER">
                        <div className="grey mx-5">
                        <div className=" my-3"><Image src="/jobpic.png"  alt="JOB" width={300} height={200} /></div>
                            <p className="grey"><b>JOB DESCRIPTION</b></p>
                            
                            <p>We are looking for an experienced Hybrid Mobile App Developer (Flutter Developer) to assist us to design and build the next generation of our mobile applications.</p>
                            <p>Ideal candidates must have a comprehensive knowledge and hands on experience of the Flutter.</p>
                            <p>You should also be able to deploy Apps on both the iOS and Android platforms</p>
                            
                            <ul>
                                <li>Must have hands on experience to 3rd party APIs (Communication & Payment gateways etc)</li>
                                <li>Experience launching and managing Production mobile Apps</li>
                                <li>Good knowledge of MySQL, Firebase, JavaScript and Google APIs</li>
                                <li>Understanding of the full mobile development life cycle</li>
                                <li>Create and execute unit tests on your code, to ensure robustness, including edge cases, usability, and general reliability.</li>
                                <li>Troubleshoot issues, fix bugs, improve application’s performance</li>
                                <li>Explore and utilize new technologies to maximize development efficiency</li>
                            </ul>
                            <p><b>Requirements: </b></p>
                            <ul>
                                <li>Translate designs and wire-frames into high quality code</li>
                                <li>Ability to meet deadlines and manage multiple projects at once without sacrificing quality</li>
                                <li>Proficient understanding of code versioning tools, such as GIT</li>
                                <li>Must be team player</li>
                                <li>Must know how to work under pressure</li>
                                <li>Must know how to make documentation of code</li>
                                <li>Must have can do and will do attitude.</li>
                                <li>Must be willing to learn new skills.</li>
                            </ul>
                            <p><b>SKILLS</b></p>
                            <p>Firebase, Flutter, Android Application, Engineering</p>
                            <p><b>JOB DETAILS</b></p>
                            <Row>
                                <Col md={6}><p><b>Industry:</b></p></Col><Col md={6}><p>Information Technology</p></Col>
                                <Col md={6}><p><b>Functional Area:</b></p></Col><Col md={6}><p>	Software & Web Development</p></Col>
                                <Col md={6}><p><b>Total Positions:</b></p></Col><Col md={6}><p>2 Posts</p></Col>
                                <Col md={6}><p><b>Job Shift:</b></p></Col><Col md={6}><p>Second Shift (Afternoon)</p></Col>
                                <Col md={6}><p><b>Job Type:</b></p></Col><Col md={6}><p>Full Time/Permanent</p></Col>
                                <Col md={6}><p><b>Job Location:</b></p></Col><Col md={6}><p>Karachi, Pakistan</p></Col>
                                <Col md={6}><p><b>Gender:</b></p></Col><Col md={6}><p>No Preference</p></Col>
                                <Col md={6}><p><b>Minimum Education:</b></p></Col><Col md={6}><p>Bachelors</p></Col>
                                <Col md={6}><p><b>Career Level:</b></p></Col><Col md={6}><p>Experienced Professional</p></Col>
                                <Col md={6}><p><b>Minimum Experience:</b></p></Col><Col md={6}><p>2 Years</p></Col>
                                <Col md={6}><p><b>Apply Before:</b></p></Col><Col md={6}><p>11 / 11 / 2021</p></Col>
                                <Col md={6}><p><b>Posting Date:</b></p></Col><Col md={6}><p>12 / 10 / 2021</p></Col>
                                <hr/>
                            </Row>
                            <p><b>How to apply :</b></p>
                            <p>Email your resume with the position applied in subject to: <a className="link">info@7ctech.com</a></p>
                        </div>
                    </Tab>
                    <Tab eventKey="ecommerce" title="Sr. JAVASCRIPT DEVELOPER">
                        <div className="grey mx-5">
                        <div className=" my-3"><Image src="/jobpic.png"  alt="JOB" width={300} height={200} /></div>
                            <p className="grey"><b>JOB DESCRIPTION</b></p>
                            
                            <p>We are looking for a Senior Javascript Developer with problem solving, self-learning, team work, quickly adaption to new technologies and mentoring skills along with the required technical skills.</p>
                            <p><b>Required Education & Skills:</b></p>
                            <ul>
                                <li>Bachelor’s or Master’s Degree in Computer Science.</li>
                                <li>Minimum of 3 years of experience in javascript frameworks and libraries.</li>
                                <li>Minimum 4 years experience in PHP  and its frameworks.</li>
                                <li>Expert of HTML CSS3 and bootstrap</li>
                                <li>Strong understanding of MVC framework</li>
                                <li>Solid understanding of JavaScript functional programming concepts, object-oriented techniques</li>
                                <li>Solid understanding of Data Structures, Algorithms, and Object-Oriented design</li>
                                <li>Strong team work, self-learning and problem solving skills</li>
                                <li>Good English communication skills</li>
                                <li>Working knowledge of Restful APIs and web services</li>
                                <li>Experience with node.js will be highly advantageous</li>
                            </ul>
                            <p><b>SKILLS</b></p>
                            <p> JavaScript, Jquery, HTML5, C++</p>
                            <p><b>JOB DETAILS</b></p>
                            <Row>
                                <Col md={6}><p><b>Industry:</b></p></Col><Col md={6}><p>Information Technology</p></Col>
                                <Col md={6}><p><b>Functional Area:</b></p></Col><Col md={6}><p>	Software & Web Development</p></Col>
                                <Col md={6}><p><b>Total Positions:</b></p></Col><Col md={6}><p>2 Posts</p></Col>
                                <Col md={6}><p><b>Job Shift:</b></p></Col><Col md={6}><p>Second Shift (Afternoon)</p></Col>
                                <Col md={6}><p><b>Job Type:</b></p></Col><Col md={6}><p>Full Time/Permanent</p></Col>
                                <Col md={6}><p><b>Job Location:</b></p></Col><Col md={6}><p>Karachi, Pakistan</p></Col>
                                <Col md={6}><p><b>Gender:</b></p></Col><Col md={6}><p>No Preference</p></Col>
                                <Col md={6}><p><b>Minimum Education:</b></p></Col><Col md={6}><p>Bachelors</p></Col>
                                <Col md={6}><p><b>Career Level:</b></p></Col><Col md={6}><p>Experienced Professional</p></Col>
                                <Col md={6}><p><b>Minimum Experience:</b></p></Col><Col md={6}><p>2 Years</p></Col>
                                <Col md={6}><p><b>Apply Before:</b></p></Col><Col md={6}><p>11 / 11 / 2021</p></Col>
                                <Col md={6}><p><b>Posting Date:</b></p></Col><Col md={6}><p>12 / 10 / 2021</p></Col>
                                <hr/>
                            </Row>
                            <p><b>How to apply :</b></p>
                            <p>Email your resume with the position applied in subject to: <a className="link">info@7ctech.com</a></p>
                          </div>
                    </Tab>
                    <Tab eventKey="webapp" title="EXPERT SQA ANALYST">
                        <div className="grey mx-5">
                            <div className=" my-3"><Image src="/jobpic.png"  alt="JOB" width={300} height={200} /></div>
                            <p className="grey"><b>JOB DESCRIPTION</b></p>
                            
                            <p>7CTECH is looking for a strong Intermediate SQA Analyst.</p>
                            <p><b>Responsibilities:</b></p>
                            <ul>
                                <li>Tests web applications to compare to specifications and documentation.</li>
                                <li>Identifies, analyzes and documents defects, questionable functions, errors, and inconsistencies in web applications functions, outputs, online screens, and content.</li>
                                <li>Establishes benchmarks for program efficiency in operating and response times.</li>
                                <li>Performs web UI validation for cross browser compatibility.</li>
                                <li>Creates & executes test cases and test data.</li>
                                <li>Contributes to establishment of standards and procedures for application design and testing.</li>
                                <li>Documents, tracks, and communicates test plans, test results, analysis, and unresolved problems.</li>
                            </ul>
                            <p><b>SKILLS</b></p>
                            <p>Black Box Testing, Automation Testing, Agile Testing, Database Applications, Software Quality Management</p>
                            <p><b>JOB DETAILS</b></p>
                            <Row>
                                <Col md={6}><p><b>Industry:</b></p></Col><Col md={6}><p>Information Technology</p></Col>
                                <Col md={6}><p><b>Functional Area:</b></p></Col><Col md={6}><p>	Software & Web Development</p></Col>
                                <Col md={6}><p><b>Total Positions:</b></p></Col><Col md={6}><p>2 Posts</p></Col>
                                <Col md={6}><p><b>Job Shift:</b></p></Col><Col md={6}><p>Second Shift (Afternoon)</p></Col>
                                <Col md={6}><p><b>Job Type:</b></p></Col><Col md={6}><p>Full Time/Permanent</p></Col>
                                <Col md={6}><p><b>Job Location:</b></p></Col><Col md={6}><p>Karachi, Pakistan</p></Col>
                                <Col md={6}><p><b>Gender:</b></p></Col><Col md={6}><p>No Preference</p></Col>
                                <Col md={6}><p><b>Minimum Education:</b></p></Col><Col md={6}><p>Bachelors</p></Col>
                                <Col md={6}><p><b>Career Level:</b></p></Col><Col md={6}><p>Experienced Professional</p></Col>
                                <Col md={6}><p><b>Minimum Experience:</b></p></Col><Col md={6}><p>2 Years</p></Col>
                                <Col md={6}><p><b>Apply Before:</b></p></Col><Col md={6}><p>11 / 11 / 2021</p></Col>
                                <Col md={6}><p><b>Posting Date:</b></p></Col><Col md={6}><p>12 / 10 / 2021</p></Col>
                                <hr/>
                            </Row>
                            <p><b>How to apply :</b></p>
                            <p>Email your resume with the position applied in subject to: <a className="link">info@7ctech.com</a></p>
                           </div>
                    </Tab>
                    <Tab eventKey="mobileapp" title="PHP / JS FULLSTACK DEVELOPER">
                        <div className="grey mx-5">
                        <div className=" my-3"><Image src="/jobpic.png"  alt="JOB" width={300} height={200} /></div>
                            <p className="grey"><b>JOB DESCRIPTION</b></p>
                            
                            <p>We are looking for a Full Stack Developer with problem solving, self-learning, team work, quickly adaption to new technologies and mentoring skills along with the required technical skills.</p>
                            <p><b>Required Education & Skills:</b></p>
                            <ul>
                                <li>Bachelor’s or Master’s Degree in Computer Science.</li>
                                <li>Minimum of 3 years of experience in javascript frameworks and libraries.</li>
                                <li>Minimum 3 years experience in PHP  and its frameworks.</li>
                                <li>Expert of HTML CSS3 and bootstrap.</li>
                                <li>Strong understanding of MVC framework.</li>
                                <li>Solid understanding of JavaScript functional programming concepts, object-oriented techniques.</li>
                                <li>Strong team work, self-learning and problem solving skills.</li>
                                <li>Good English communication skills.</li>
                                <li>Working knowledge of Restful APIs and web services.</li>
                                <li>Experience with node.js will be highly advantageous.</li>
                            </ul>
                            <p><b>SKILLS</b></p>
                            <p>API Development, Core PHP, HTML</p>
                            <p><b>JOB DETAILS</b></p>
                            <Row>
                                <Col md={6}><p><b>Industry:</b></p></Col><Col md={6}><p>Information Technology</p></Col>
                                <Col md={6}><p><b>Functional Area:</b></p></Col><Col md={6}><p>	Software & Web Development</p></Col>
                                <Col md={6}><p><b>Total Positions:</b></p></Col><Col md={6}><p>2 Posts</p></Col>
                                <Col md={6}><p><b>Job Shift:</b></p></Col><Col md={6}><p>Second Shift (Afternoon)</p></Col>
                                <Col md={6}><p><b>Job Type:</b></p></Col><Col md={6}><p>Full Time/Permanent</p></Col>
                                <Col md={6}><p><b>Job Location:</b></p></Col><Col md={6}><p>Karachi, Pakistan</p></Col>
                                <Col md={6}><p><b>Gender:</b></p></Col><Col md={6}><p>No Preference</p></Col>
                                <Col md={6}><p><b>Minimum Education:</b></p></Col><Col md={6}><p>Bachelors</p></Col>
                                <Col md={6}><p><b>Career Level:</b></p></Col><Col md={6}><p>Experienced Professional</p></Col>
                                <Col md={6}><p><b>Minimum Experience:</b></p></Col><Col md={6}><p>2 Years</p></Col>
                                <Col md={6}><p><b>Apply Before:</b></p></Col><Col md={6}><p>11 / 11 / 2021</p></Col>
                                <Col md={6}><p><b>Posting Date:</b></p></Col><Col md={6}><p>12 / 10 / 2021</p></Col>
                                <hr/>
                            </Row>
                            <p><b>How to apply :</b></p>
                            <p>Email your resume with the position applied in subject to: <a className="link">info@7ctech.com</a></p>    
                        </div>
                    </Tab>
                    </Tabs>
                        </Col>
                    </Row>
                   
                    
                </Container>
            </div>
            
            <Hear/>

            <div className="">
            <div className="vidContainer col-12 text-center">
            
            <div className="vid_div col-12">
                <video playsInline className="border"  width="100%" autoPlay="autoplay"  loop="loop" style={{  height : '100%' , objectFit : 'cover' }} > <source src="https://res.cloudinary.com/seven-ctech/video/upload/v1625580647/website-Images/contact_video_m5axqa.mp4" /></video>
            </div>
        
            <div className="vidDiv_content col-12 my-1 align-self-center">
                <FontAwesomeIcon className="blue-icon" icon={faArrowCircleDown}/>  
                <h2 className="white-big mt-5" > NEED HELP? </h2>
                <p className="text-center white-small mt-3 mb-3 ">  Let’s build something incredible together! </p>
                <p className="text-center white-small mt-3 mb-3 " >   Share your business ideas or needs with us and give us a chance to scale and transform your business with the best possible solutions and incredible services. </p>

                <button className="vid_div_write_btn my-3 mx-5" 
                    onClick={()=>window.scrollTo(0,6560,{behavior: 'auto'})}
                > 
                    SUBMIT 
                </button>
                <button className="vid_div_write_btn my-3 mx-5" 
                     onClick={()=>window.scrollTo(0,0,{behavior: 'auto'})}
                > 
                    WRITE US TODAY
                </button>
                
            </div>

        
        </div>
            </div>
            </div>
        </div>
    )
}

export default Contact
