

async function getBlogs(){

    let blogData = []
    
    try {
        // await db_con.query('SELECT * FROM blogData', function runQuery(err, result) {
        //     if (err) {
        //         return err;
        //     }
        //     return result
        // })
    } catch (error) {
        return error
    }

    return blogData 
}



const getBlogById = async (id) => {

    let blogData = []
    try {
        blogData = await fetch(`/api/blogs/${id}`).then((res)=>res.json());

    } catch (error) {
    }
    return blogData
}

export { getBlogs, getBlogById }
