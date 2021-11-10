import React from 'react'
import Blogs from '../../components/Blogs/index'
import safeJsonStringify from 'safe-json-stringify';
import { promisePool } from '../../utils/dbTwo';

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
      const [row,fields] = await promisePool.query("SELECT * FROM blogData");
      const stringifiedData = safeJsonStringify(row)
       data = JSON.parse(stringifiedData)
    } catch (error) {
       
    }

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