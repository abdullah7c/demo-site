import Blog from "../../components/Blogs/Blog"
import {executeQuery} from '/utils/db'

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
    const result = await executeQuery({
      query: 'SELECT * FROM blogdata',
    })
    const res = await JSON.stringify(result)
    data = await JSON.parse(res)
  } catch ( error ) { console.log( error );}

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
      const result = await executeQuery({
        query: `select * from blogdata where slug='${id}'`,
      })
      const res = await JSON.stringify(result)
      data = await JSON.parse(res)
    } catch ( error ) { console.log( error );}


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

