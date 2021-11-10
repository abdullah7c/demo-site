import '../styles/globals.css';
import '../styles/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import Loader from '/components/shared/Loader';
import BlogContextProvider from '../context/BlogContextProvider';
import { SessionProvider } from "next-auth/react"
import Router from 'next/router'
import SSRProvider from 'react-bootstrap/SSRProvider';
import  Transition  from '../components/shared/Transition';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
  
}) {
 
  const [loading, setLoading] = useState(false)
  
  Router.events.on("routeChangeStart", (url) => {
    setLoading(true)
  })
  
  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false)
  })

  return (
    <SSRProvider>
    <SessionProvider session={session}>
      <BlogContextProvider>
        <Header/>
          <div style={{marginTop:"55px"}}></div>
          {
            loading &&
              <Loader/>
          }
          { !loading && 
            <Transition><Component {...pageProps} />
            <Footer/></Transition>
          }
      </BlogContextProvider>
    </SessionProvider>
  </SSRProvider>
  )
}