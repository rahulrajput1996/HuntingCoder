import React from 'react'
import style1 from "../styles/about1.module.css"
import style2 from "../styles/about2.module.css"

const About = () => {
    // console.log('About')
    console.log(style1)
    console.log(style2)
    return (
        <>
            <div className={style1.container}>About</div>
            <div className={`${style1.container} ${style2.container}`}>new about</div>
        </>
    )
}

export default About