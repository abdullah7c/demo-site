import React from 'react'
import Services from '/components/Services'


const services = ({servicesData}) => {
    return (
        <div>
            <Services servicesData={servicesData}/>
        </div>
    )
}

export default services


  export async function getStaticProps() {
      await new Promise((resolve, reject)=>{
          setTimeout(resolve, 1000)
      });
    const servicesData = [
        {
            "title":"DESIGN & DEVELOPMENT",
            "desc":"Our dedicated team is working on WordPress, AngulerJS, NodeJS, PSDs and more..",
            "path":"service/webdesign.jpg"
        },
        {
            "title":"E-Commerce",
            "desc":"We offer customized E-Commerce services along with development in magento, WooCommerce..",
            "path":"service/ecommerce.svg"
        },
        {
            "title":"WEB APPLICATION",
            "desc":"Customized web solutions for B2B services listing, lead management, supply chain..",
            "path":"service/webapp.jpg"
        },
        {
            "title":"MOBILE APP",
            "desc":"Mastering the art of creating mobile applications that offer services on responsive and native development",
            "path":"service/mobileapp.jpg"
        },
        {
            "title":"DATA SCRAPING",
            "desc":"Data mining systems, text mining solutions, big data analysis, API Integrations and more",
            "path":"service/datascrap.jpg"
        },
        {
            "title":"ARTIFICIAL INTELLIGENCE",
            "desc":"As technology evolves, some of our best solutions are Python based AI and deep learning solutions.",
            "path":"service/ai.jpg"
        },
        {
            "title":"DOT NET SOLUTION",
            "desc":".NET core is the next big thing after the release of revolutionary .NET and .NET 2.0. 7CTECH has been working and developing solutions using Microsoft .NET core technologies.",
            "path":"service/dotnet.png"
        },
        {
            "title":"CUSTOMIZED BUSINESS SOLUTION",
            "desc":"If you have a killer idea or a great startup thought lingering around in your mind for a long time?..",
            "path":"service/webdesign.jpg"
        },
        {
            "title":"SHOPIFY DEVELOPMENT",
            "desc":"Shopify is one of the biggest E-Commerce platforms and enablers and one of the best optimized one. 7CTECH has been providing services regarding the platform since many years now.",
            "path":"service/shopify.png"
        },  
    ];
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        servicesData,
      },
    }
  }