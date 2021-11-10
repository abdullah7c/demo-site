import nc from 'next-connect'
import { likeBlogById} from '../../../controller/blogs'

const handler = nc();

handler.put(likeBlogById)

export default handler