import React from 'react'

const Blog = () => {
    return (
        <>
            <style jsx global>
                {`
                .dummy{
                    background:black;
                    color:white;
                }
                `}
            </style>
            <div className='dummy'>Blog</div>
        </>
    )
}

export default Blog