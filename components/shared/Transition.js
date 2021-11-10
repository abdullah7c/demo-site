import React from 'react'
import aos from 'aos'
import 'aos/dist/aos.css'

const Transition = ({children}) => {

    
    React.useEffect(() => {
    aos.init()
  }, [])

    return (
        <div data-aos="fade-in">
            {children}
        </div>
    )
}

export default Transition