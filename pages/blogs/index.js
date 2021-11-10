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
    
    const [row,fields] = await promisePool.query("SELECT * FROM blogData");
    const stringifiedData = safeJsonStringify(row)
    const data = JSON.parse(stringifiedData)

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