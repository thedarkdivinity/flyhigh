import React from 'react'
import ObjectivesData from '../../mapedData/ObjectivesData';

const Objectives = () => {
    return (
        <section className="objectives">
        <h1 data-aos="flip-left">Our Objective</h1>
        
        <div className="container">
        <ul className="objectiveList">
        {ObjectivesData.map((item)=><li key={item.id}>{item.content}</li>)}
        </ul>
        </div>
        </section>
    )
}

export default Objectives;
