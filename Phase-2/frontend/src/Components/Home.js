import React, { useContext } from 'react';
import './Home.css'
import img from './profilepic.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
  return (
   
    <div className='box'>
      <div className='left'>
        <h2>Kriova</h2>
        <img src={img} alt='profile'/>
        <h4>Isha Khurana</h4>
        
        <p>Web Developer</p>
         <div >
        <button type="button" className='btn btn-light' onClick={()=>navigate("/login")
          }> 
            Sign Out
          </button> 
        </div> 
      </div>
      <div className='right'>
        <div className='info'>
          <h3>ABOUT ME</h3>
          <p className='clg'>Student at Maharaja Surajmal Institute of Technology, Janakpuri, Delhi</p>
          <div className='info-data'>
            <div className='data'>
              <h4>Email</h4>
              <p>ikhurana2709@gmail.com</p>
            </div>
            <div className='data'>
              <h4>Contact no.</h4>
              <p>9728271601</p>
            </div>
          </div>
        </div>

        <div className='projects'>
          <h3>Projects</h3>
          <div className='projects-data'>
            <div className='data'>
              <h4><a href='https://github.com/iisha27/newsapp'target='_blank' className='a'>Newsapp</a></h4>
              <p>News App created using React js and newsapi. This app can show different category news like general, health, entertainment, sports, Science, Technology etc.</p>
            </div>
            <div className='data'>
              <h4><a className='a' href='https://github.com/iisha27/TextUtils' target='_blank'>Textutils</a></h4>
              <p>This is created using React.js. It is a utility which can be used to manipulate your text in the way you want.</p>
            </div>
          </div>
        </div>

        <div className="footer-social-icons">
          <h4 className="_14">Follow me</h4>
          <ul className="social-icons">
              <li><a href="https://www.linkedin.com/in/ishakhurana2709/" target='_blank'className="social-icon"> <i className="fa fa-linkedin"></i></a></li>
              <li><a href="https://github.com/iisha27" target='_blank'className="social-icon"> <i className="fa fa-github"></i></a></li>
          </ul>
      </div>
          
  </div>        
</div>

  )
}

export default Home;