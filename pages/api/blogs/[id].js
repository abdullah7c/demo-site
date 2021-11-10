import nc from 'next-connect'
import { deleteBlogsById, getBlogsById, editBlogsById ,likeBlogById} from '../../../controller/blogs'

const handler = nc();

handler.get(getBlogsById);
handler.delete(deleteBlogsById);
handler.put(editBlogsById)
handler.put(likeBlogById)

export default handler