import React from 'react';
import { FaBootstrap, FaCss3, FaDatabase, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
const Features = () => {
    return (
        <section className='px-5 my-5'>
   <div className="title">
   <h1>What I Know</h1>
   <p className='c-one'></p>
   <p className='c-two'></p>
   </div>
            <div className="feature-container ">
                <div className="feature-info">
                  <FaJava/>
                    <h2>Javascript</h2>
                    <p>I know javascript. I am passionate about it. I am working with javascript last 1 year. I learn new thing every single day. I love javascript.</p>
                </div>
                <div className="feature-info">
                  <FaReact/>
                    <h2>React</h2>
                    <p>I know javascript. I am passionate about it. I am working with javascript last 1 year. I learn new thing every single day. I love javascript.</p>
                </div>
                <div className="feature-info">
                  <FaNodeJs/>
                    <h2>Node</h2>
                    <p>I know javascript. I am passionate about it. I am working with javascript last 1 year. I learn new thing every single day. I love javascript.</p>
                </div>
                <div className="feature-info">
                  <FaDatabase/>
                    <h2>MongoDB</h2>
                    <p>I know javascript. I am passionate about it. I am working with javascript last 1 year. I learn new thing every single day. I love javascript.</p>
                </div>
                <div className="feature-info">
                  <FaBootstrap/>
                    <h2>Bootstrap</h2>
                    <p>I know javascript. I am passionate about it. I am working with javascript last 1 year. I learn new thing every single day. I love javascript.</p>
                </div>
                <div className="feature-info">
                  <FaCss3/>
                    <h2>Tailwind</h2>
                    <p>I know javascript. I am passionate about it. I am working with javascript last 1 year. I learn new thing every single day. I love javascript.</p>
                </div>
            </div>
        </section>
    );
};

export default Features;