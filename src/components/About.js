import React from 'react'
import about from '../Assets/about.jpg';
import './About.css';

const About=()=> {
  return (
    <div className='AboutSectionContainer'>
        <div className='aboutImageContainer'>
            <div className='aboutImage'>
                <img src={about} className='aboutImageElement' alt='aboutInage'/>
            </div>
        </div>
        <div className='aboutSectionInfoContainer'>
            <div className='sectionNumberContainer'>
                <div>02</div>
                <div className='sectionLine'></div>
                <div>About us</div>
            </div>
            <div className='aboutSection'>
                <h2> We are built for business</h2>
                <p>
                The office in Ongata Rongai: Book your seat,
                 reserve Monday to Saturday, 8 am to 8 pm. Modern,
                  flexible, inspiring workspace.
                </p>
                <button>Email us</button>
            </div>
        </div>
    </div>
  )
}

export default About