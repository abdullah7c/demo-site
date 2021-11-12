import React,{useState,useEffect} from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import {Form,Button} from 'react-bootstrap'

export const Editor = (props) => {

  const [blog, setBlog] = useState('')
  const [title,setTitle] = useState('')
  const [creator,setCreator] = useState('')
  const [slug,setSlug] = useState('')
  const [date,setDate] = useState('')

  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    async function getData(){
      await setBlog(props.blog)
    }
    getData();
    return () => setBlog('')
  }, [props.blog])

  const showBlog = () =>{
    fetch(`/api/blogs/${props.id}`, {
            method: "put",
            body: blog
        })
            .then(resp => resp.json())
            .catch(err => console.log(err))
  }

  const createBlog = () =>{

    const requestOptions = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content:blog,
        title:title,
        createdBy:creator,
        slug:slug,
        createdAt:date,
        imgurl:url
    })
  };
  fetch(`/api/blogs/`, requestOptions)
      .then(response => response.json());

      alert('Blog Created')
  }

  const uploadImage = () => {
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "g4hjcqh7")
    data.append("cloud_name", "abdullah7c")
    fetch(`https://api.cloudinary.com/v1_1/abdullah7c/image/upload`, {
        method: "post",
        body: data
    })
        .then(resp => resp.json())
        .then(data => {
            setUrl(data.url)
        })
        .catch(err => console.log(err))
}

  const onChange = value => {
    setBlog(value);
  };

  return (
    <div className="text-editor">
      {
        props.blog==='' &&
          <div>
          <Form.Control className="my-2" type="text" placeholder="Blog Title" onChange={(e)=>setTitle(e.target.value)} />
          <Form.Control className="my-2" type="text" placeholder="Created By" onChange={(e)=>setCreator(e.target.value)} />
          <Form.Control className="my-2" type="text" placeholder="Slug" onChange={(e)=>setSlug(e.target.value)} />
          <input className="my-2" type="date" onChange={(e)=>setDate(e.target.value)} />
          
          <div className="my-2">
                <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
                <br/><Button className="my-2" size="sm" onClick={uploadImage}>Upload</Button>
            </div>
            <div className="my-2">
                <img src={url} height={100} width={200} />
            </div>
          </div>
      }
      <EditorToolbar />
      <ReactQuill
        theme="snow"
        value={blog?blog:props.blog}
        onChange={onChange}
        placeholder={"Write something awesome..."}
        modules={modules}
        formats={formats}
        style={{overflowY:"auto",maxHeight:"400px",minHeight:"100px"}}
      />
      <Button onClick={props.blog?showBlog:createBlog}>save</Button>
    </div>
  );
};

export default Editor;