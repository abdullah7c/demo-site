import { useState, useEffect, useContext,useRef } from 'react'
import { BlogContext } from '../../context/BlogContextProvider'
import { Container, Col, Row } from 'react-bootstrap'
import ReactHtmlParser from 'react-html-parser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faFileUpload, faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { useSession } from "next-auth/react"
import dynamic from 'next/dynamic'
import Upload from './Upload'
import Link from 'next/link'
import Router from 'next/router'

const Editor = dynamic(async() =>
  import('./Editor'), { ssr: false }
)


const Blog = ({data}) => {

    const Recentblogs = useContext(BlogContext)||[]
    
    //const Recentblogs = blogsData?blogsData:[]
    const [slug, setSlug] = useState('')
    const [blog,setBlog] = useState({})
    const { data: session, status } = useSession()
    const [likes, setLikes] = useState(0)
    const [Liked,setLiked] = useState(false)

    useEffect(async() => {
        await localStorage.getItem(`liked${data[0].id}`)?setLiked(true):setLiked(false)

        if(session){
            Router.reload()
        }

        await setBlog(data[0])
        await setLikes(data[0].likes)

        if(slug){
            changePage(slug)
            //await Router.push(`/blogs/${slug}`)
        }
       
    }, [slug])

    const changePage = async(blogslug) => {
        //setSlug(blogslug)
        await Router.push(`/blogs/${blogslug}`)
        setSlug('')
    }

    const likeBlog = async(id,blogslug) =>{
        //console.log(likes)
        localStorage.setItem(`liked${id}`, true)
        await fetch(`/api/blogLike/${id}`, {
                method: "put",
                body: likes+1
            })
                .then(resp => resp.json())
                .catch(err => console.log(err))

        await setSlug(blogslug)

       }
    return (
        <div className="blogs-style">
            <div className="hero">
                <Container className="py-2">
                    <Row className="justify-content-center text-center my-5">
                        <Col>
                            <h1 className="heading-blog">{blog.title}</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="">
                <Container className="py-2">
                {!session &&  <Row className="justify-content-center my-5">
                        <Col md={7}>
                        

                        <Row><Col><img className="blog-image" src={`${blog.imgurl}`} alt="blog" /></Col></Row>
                        <Row className="justify-content-end">
                            <Col md={12} className="my-1" >
                                <span>By {blog.createdBy} | {(blog.createdAt?(blog.createdAt).substring(0, 10):null)}</span>
                                {
                                    Liked===true &&
                                    
                                    <span style={{float:"right",cursor:"pointer"}} >
                                        <FontAwesomeIcon icon={faHeart} className="liked" /><b> {blog.likes}</b>
                                    </span>
                                }
                                {
                                    Liked===false &&
                                    
                                    <span style={{float:"right",cursor:"pointer"}} onClick={()=>likeBlog(blog.id,blog.slug)}>
                                        <FontAwesomeIcon icon={faHeart} className="not-liked" /><b> {blog.likes}</b>
                                    </span>
                                }
                            </Col>
                        </Row>
                        
                        <Row className="my-5">
                            <Col>{ReactHtmlParser(blog.content)}</Col>
                        </Row>


                        </Col>
                        <Col className="mx-5" md={3}>
                            <div className="mb-4"><b>RECENT POSTS</b></div>
                            {  !session &&
                                Recentblogs.slice(0,3).map((blogs)=>{
                                    return(
                                    <Row key={blogs.id} className="recent-blog px-3 py-3">
                                        <Col md={2}>
                                            <FontAwesomeIcon className="mt-3" icon={faFileAlt} />
                                        </Col>
                                        <Col md={10}>
                                            <a onClick={()=>setSlug(blogs.slug)} className="recent-blog-title">{blogs.title}</a>
                                        </Col>
                                    </Row>
                                    )
                                })
                            }
                        </Col>
                    </Row>}
                    {session &&  <Row className="justify-content-center my-5">
                        <Col md={7}>

                        <Row><Col><img style={{height:"420px",width:"750px"}} src={`${blog.imgurl}`} alt="blog" /></Col></Row>
                        <Row className="justify-content-end">
                            <Col md={12} >
                                <span>By {blog.createdBy} | {(blog.createdAt?(blog.createdAt).substring(0, 10):null)}</span>
                                <span style={{float:"right"}}> <FontAwesomeIcon icon={faHeart} /> <b>{blog.likes}</b></span>
                            </Col>
                        </Row>
                        
                        <Row className="my-5">
                            <Col> <Editor blog={blog.content} id={blog.id} /> </Col>
                        </Row>


                        </Col>
                        <Col md={3}>
                            <h4>Blog Modification</h4>
                            <Upload id={blog.id} />
                        </Col>
                    </Row>}
                </Container>
            </div>
        </div>
    )
}

export default Blog
