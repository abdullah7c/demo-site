import nc from 'next-connect'
import { editImageById } from '../../../controller/blogs'

const handler = nc();

handler.put(editImageById)

export default handler