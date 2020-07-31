import React from 'react'

const Heading = ({heading,headingColor}) => {
    return (
        <h1 style={{textTransform:"capitalize",padding:"2px 10px",textAlign:"center" ,fontSize:"50px", color:{headingColor}}} data-aos="fade-down">{heading}</h1>
    )
}

export default Heading
