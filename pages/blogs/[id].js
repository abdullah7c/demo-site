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

    const [row,fields] = await promisePool.query("SELECT * FROM blogData");
    const stringifiedData = safeJsonStringify(row)
    const data = JSON.parse(stringifiedData)

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
    
    const [row,fields] = await promisePool.query(`select * from blogdata where slug='${id}'`);
    const stringifiedData = safeJsonStringify(row)
    const data = JSON.parse(stringifiedData)

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

