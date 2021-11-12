import React,{useEffect,useState} from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap';
import ReactHtmlParser from 'react-html-parser';
import Link from 'next/link';
import { useSession} from "next-auth/react"
import AddBlog from './AddBlog'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Router from 'next/router';

const Blogs = ({data}) => {

    
    const { data: session, status } = useSession()
    const [smShow, setSmShow] = useState(false);
    const [blogData, setBlogData] = useState([])
    const [blogId, setBlogId] = useState()
    const deleteBlog = (id) =>{
        setBlogId(id)
        setSmShow(true)
    }
    const confirmDelete = () =>{
        fetch(`/api/blogs/${blogId}`, {
            method: "delete",
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        setSmShow(false)
    }
    useEffect(()=>{
        setBlogData(data)
    },[data])
    return (
        <div>
            <div className="blogs-style">
            <div className="hero">
                <Container className="py-2">
                    <Row className="justify-content-center text-center my-5">
                        <Col>
                            <h1 className="heading">BLOGS</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="my-5">
            <Container className="py-2">
                {
                    session &&
                    <Row className="justify-content-center my-5">
                        <Col md="auto">
                            <AddBlog/>
                            <Modal
                                size="sm"
                                show={smShow}
                                onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"
                            >
                                <Modal.Header closeButton>
                                <Modal.Title id="example-modal-sizes-title-sm">
                                    Confirmation?
                                </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Button variant="danger" onClick={confirmDelete}> Delete </Button>
                                    <Button style={{float:'right'}} variant="secondary" onClick={() => setSmShow(false)}> Cancel </Button> </Modal.Body> 
                            </Modal>
                        </Col>
                    </Row>
                }
                    <Row className="justify-content-center my-5">
                       {blogData.map((blog,index)=>{
                           return(
                            <Col key={index+1} xs={9} md={3} className="my-3 mx-1">
                            <Card>
                                <img  src={`${blog.imgurl}`} alt="blog" height="165" />
                                    <Card.Body>
                                    <Card.Title style={{minHeight:"65px",fontSize:"18px"}}>{blog.createdAt.slice(0, 10)}:  {blog.title}</Card.Title>
                                        <div style={{fontSize:"15px",height:"110px"}}>{ReactHtmlParser(blog.content.slice(0, 90))}</div>
                                        <div className="center-responsive">
                                            <button onClick={()=>Router.push(`/blogs/`+blog.slug)} className="blog-btn-custom"> READ MORE</button>
                                            {
                                                session &&
                                                <FontAwesomeIcon style={{float:"right",fontSize:"25px",color:"coral",cursor:"pointer"}} 
                                                    onClick={() => deleteBlog(blog.id)} icon={faTrashAlt} />
                                            }
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                           )
                       })}
                    </Row>
                </Container>
            </div>
            </div>
        </div>
    )
}

export default Blogs