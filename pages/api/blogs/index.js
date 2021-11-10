import { getAllBlogs, createBlog } from '../../../controller/blogs'
import nc from 'next-connect'

const handler = nc();

handler.get(getAllBlogs);
handler.post(createBlog);

export default handler