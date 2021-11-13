import {executeQuery} from '../../utils/db'

// const getAllBlogs = async (req,res) => {

//     try {
//         let blogData = await executeQuery('select * from blogdata')
//         res.send(blogData);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// }
async function getAllBlogs(req, res){
    try {
        const result = await executeQuery({
          query: 'SELECT * FROM blogdata',
          //values: [req.body.content],
      });
      res.send(result)
  } catch ( error ) {
      console.log( error );
  }  
};


// const getBlogsById = async (req,res) => {

//     let id = req.query.id;
//     try {
//         let blogData = await executeQuery(`select * from blogdata where slug='${id}'`)
//         res.status(200).json(blogData);

//     } catch (error) {
//         res.status(500).json(err)
//     }
// }

async function getBlogsById(req, res){

    let id = req.query.id;
    try {
        const result = await executeQuery({
          query: `select * from blogdata where slug='${id}'`,
          //values: [req.body.content],
      });
      res.send(result)
  } catch ( error ) {
      console.log( error );
  }  
};

// const deleteBlogsById = async (req,res) => {

//     let id = req.query.id;
//     console.log('BLOG DELETION')
//     try {
//         let blogData = await executeQuery(`delete from blogdata where id=${id}`)
//         res.status(200).json(blogData);

//     } catch (error) {
//         res.status(500).json(err)
//     }
// }


async function deleteBlogsById(req, res){

    let id = req.query.id;
    console.log('BLOG DELETION')
    try {
        const result = await executeQuery({
          query: `delete from blogdata where id=${id}`,
          //values: [req.body.content],
      });
      res.send(result)
  } catch ( error ) {
      console.log( error );
  }  
};

// const editBlogsById = async (req,res) => {

//     let id = req.query.id;
//     let content = req.body
//     try {
//         let blogData = await executeQuery(`UPDATE blogdata SET content = '${content}' WHERE blogdata.id = ${id}`)
//         res.status(200).json(blogData);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// }

async function editBlogsById(req, res){

    let id = req.query.id;
    let content = req.body
    console.log("=====BLOG EDITED======")
    try {
        const result = await executeQuery({
          query: `UPDATE blogdata SET content = ? WHERE blogdata.id = ?`,
          values: [content,id],
      });
      res.send(result)
  } catch ( error ) {
      console.log( error );
  }  
};

// const likeBlogById = async (req,res) => {

//     let id = req.query.id;
//     let likes = req.body
//     console.log(likes)
//     try {
//         let blogData = await executeQuery(`UPDATE blogdata SET likes = ${likes} WHERE blogdata.id = ${id}`)
//         res.status(200).json(blogData);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// }

async function likeBlogById(req, res){

    let id = req.query.id;
    let likes = req.body
    console.log(likes)
    try {
        const result = await executeQuery({
          query: `UPDATE blogdata SET likes = ? WHERE blogdata.id = ?`,
          values: [likes,id],
      });
      res.send(result)
  } catch ( error ) {
      console.log( error );
  }  
};

// const editImageById = async (req,res) => {

//     let id = req.query.id;
//     let url = req.body
//     try {
//         let blogData = await executeQuery(`UPDATE blogdata SET imgurl = '${url}' WHERE blogdata.id = ${id}`)
//         res.status(200).json(blogData);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// }

async function editImageById(req, res){

    let id = req.query.id;
    let url = req.body;
    try {
        const result = await executeQuery({
          query: `UPDATE blogdata SET imgurl = ? WHERE blogdata.id = ?`,
          values: [url,id],
      });
      res.send(result)
  } catch ( error ) {
      console.log( error );
  }  
};

async function createBlog(req, res){

    let {title,content,slug,createdAt,createdBy,imgurl} = req.body
    try {
        const result = await executeQuery({
          query: `INSERT INTO blogdata (id, title, content, createdBy, createdAt, updatedAt, imgurl, metadescription, metatitle, status, slug, likes) VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?)`,
          values: [title,content, createdBy,createdAt,createdAt,imgurl,slug,slug,1,slug,0],
      });
      res.send(result)
  } catch ( error ) {
      console.log( error );
  }  
};

// const createBlog = async (req,res) => {
//     let {title,content,slug,createdAt,createdBy,imgurl} = req.body
//     console.log("Blog Creation ===============")
//     try {
//         let blogData = await executeQuery(`
//         INSERT INTO blogdata (id, title, content, createdBy, createdAt, updatedAt, imgurl, metadescription, metatitle, status, slug, likes) VALUES (NULL, 
//             '${title}', 
//             '${content}', 
//             '${createdBy}', 
//             '${createdAt}', 
//             '${createdAt}', 
//             '${imgurl}', 
//             '${slug}', 
//             '${slug}', 
//              1, 
//             '${slug}', 
//              0);
//         `)
//         res.status(200).json(blogData);
//     } catch (error) {
//         res.status(500).json(err)
//     }
// }

export {getAllBlogs, getBlogsById, deleteBlogsById, createBlog, editBlogsById, editImageById, likeBlogById}
