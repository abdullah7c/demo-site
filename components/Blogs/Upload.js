import { useState,useEffect } from 'react'
import router from 'next/router'

const Upload = (props) => {

    const [image, setImage] = useState("");
    const [url, setUrl] = useState("");

    useEffect(() => {
        {
            url && 
            
            fetch(`/api/image/${props.id}`, {
            method: "put",
            body: url
        })
            .then(res => res.json())
            .catch(err => console.log(err))
        }
    }, [url])

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
    
    return (
        <div>
            <div>
                <input type="file" onChange={(e) => setImage(e.target.files[0])}></input>
                <button className="my-2 btn btn-primary" onClick={uploadImage}>Upload</button>
            </div>
            <div>
                {/* <img src={url} /> */}
            </div>
        </div>
    )
}
export default Upload;