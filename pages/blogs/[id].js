import Blog from "../../components/Blogs/Blog"
import safeJsonStringify from 'safe-json-stringify';
import { promisePool } from '../../utils/dbTwo';

const blog = ({data,blogsData}) => {
    return (
        <div>
            <Blog data={data} blogsData={blogsData} />
        </div>
    )
} 
export default blog

export async function getStaticPaths() {

  let data = []

  try {
    const [row,fields] = await promisePool.query("SELECT * FROM blogData");
    const stringifiedData = safeJsonStringify(row)
     data = JSON.parse(stringifiedData)
  } catch (error) {
    throw error
  }

    const paths = data.map(blog => {
        return {
            params: {id:blog.slug.toString()}
        }
    })
    return {
        paths,
        fallback: true
    }
}


export async function getStaticProps(context) {
    const id = context.params.id;
    
    let data = []

    try {
      const [row,fields] = await promisePool.query(`select * from blogdata where slug='${id}'`);
      const stringifiedData = safeJsonStringify(row)
      data = JSON.parse(stringifiedData)
    } catch (error) {
      throw error
    }

    //const blogs = await getBlogs();


    if (!data) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }
    return {
      props: { data},
    }
}

