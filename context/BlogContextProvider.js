import { createContext } from "react";
import useSWR from 'swr'

export const BlogContext = createContext();

const fetcher = (url) => fetch(url).then((res) => res.json())

const BlogContextProvider = ({children}) => {

    const { data, error } = useSWR(`/api/blogs/`, fetcher)

    return (
        <BlogContext.Provider value={data}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider
