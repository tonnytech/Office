import React from 'react'
import Navbar from './Navbar'
import './Hero.css';

const Hero = ()=> {
  return (
    <section className='heroMainContainer'>
        <Navbar />
        <div className='heroIntroContainer'>
            <div className='heroIntro'>
                <div className='heroIntroHeader'>
                    <h3>Meet your</h3>
                    <h2>New Office</h2>
                </div>
                <div className='heroParagraph'>
                    <p>
                    Elevate your work with our premium 
                    co-working space—inspiring, flexible, 
                    and collaborative. Join us today! 
                    </p>
                </div>
                <div className='heroButtonContainer'>
                    <button>
                        Contact us
                    </button>
                    <button>
                        Book a tour
                    </button>
                </div>
            </div>
            <div className='heroImageContainer'>
                <div className='heroImage'>
                    <div>image appears here</div>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default Hero