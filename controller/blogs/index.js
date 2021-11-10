import { executeQuery } from "../../utils/db";

const getAllBlogs = async (req,res) => {

    try {
        let blogData = await executeQuery('select * from blogdata')
        res.send(blogData);
    } catch (error) {
        res.status(500).json(err)
    }
}

const getBlogsById = async (req,res) => {

    let id = req.query.id;
    try {
        let blogData = await executeQuery(`select * from blogdata where slug='${id}'`)
        res.status(200).json(blogData);

    } catch (error) {
        res.status(500).json(err)
    }
}

const deleteBlogsById = async (req,res) => {

    let id = req.query.id;
    console.log('BLOG DELETION')
    try {
        let blogData = await executeQuery(`delete from blogdata where id=${id}`)
        res.status(200).json(blogData);

    } catch (error) {
        res.status(500).json(err)
    }
}

const editBlogsById = async (req,res) => {

    let id = req.query.id;
    let content = req.body
    try {
        let blogData = await executeQuery(`UPDATE blogdata SET content = '${content}' WHERE blogdata.id = ${id}`)
        res.status(200).json(blogData);
    } catch (error) {
        res.status(500).json(err)
    }
}

const likeBlogById = async (req,res) => {

    let id = req.query.id;
    let likes = req.body
    console.log(likes)
    try {
        let blogData = await executeQuery(`UPDATE blogdata SET likes = ${likes} WHERE blogdata.id = ${id}`)
        res.status(200).json(blogData);
    } catch (error) {
        res.status(500).json(err)
    }
}

const editImageById = async (req,res) => {

    let id = req.query.id;
    let url = req.body
    try {
        let blogData = await executeQuery(`UPDATE blogdata SET imgurl = '${url}' WHERE blogdata.id = ${id}`)
        res.status(200).json(blogData);
    } catch (error) {
        res.status(500).json(err)
    }
}

const createBlog = async (req,res) => {
    let {title,content,slug,createdAt,createdBy,imgurl} = req.body
    console.log("Blog Creation ===============")
    try {
        let blogData = await executeQuery(`
        INSERT INTO blogdata (id, title, content, createdBy, createdAt, updatedAt, imgurl, metadescription, metatitle, status, slug, likes) VALUES (NULL, 
            '${title}', 
            '${content}', 
            '${createdBy}', 
            '${createdAt}', 
            '${createdAt}', 
            '${imgurl}', 
            '${slug}', 
            '${slug}', 
             1, 
            '${slug}', 
             0);
        `)
        res.status(200).json(blogData);
    } catch (error) {
        res.status(500).json(err)
    }
}

export {getAllBlogs, getBlogsById, deleteBlogsById, createBlog, editBlogsById, editImageById, likeBlogById}
