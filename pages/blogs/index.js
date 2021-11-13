import React from 'react'
import Blogs from '/components/Blogs/index'
import {executeQuery} from '/utils/db'

const blogs = ({data}) => {
    return (
        <div>
            <Blogs data={data} />
        </div>
    )
}

export default blogs

export async function getStaticProps() {
    
    let data = []

    try {
      const result = await executeQuery({
        query: 'SELECT * FROM blogdata',
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
      props: { data },
    }
  }
