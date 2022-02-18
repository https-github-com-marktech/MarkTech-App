import React from 'react'
import './footer.css'
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Whatsapp from '../images/whatsapp.png'
// import { FaWhatsapp } from 'react-icons/fa'

function Footer() {
  return (
      <footer className='footer' >
        <div className='container' >
          
            <div className='Company'>
              <h4>Company</h4>
              
                 <p> Buyer</p>
                 <p> Supplier </p>
              
            </div>
            <div className='Customers'>
              <h4>Customers</h4>
              
                 <p> About us</p>
                <p>  Careers</p>
                <p> Contact us</p> 
              
            </div>
            <div className='Information'>
              <h4>Futher Information</h4>
              
                  <p>Terms & Conditions </p>
                   <p> Privacy Policy </p>
                  
            </div>
            <div className='Social'>
              <h4>Follow us  </h4>
                <div className='social-links' >
                <a  href='https://www.facebook.com/' ><img className='redes' alt="facebook" src= {Facebook}/></a>
                <a  href='https://www.instagram.com/' ><img className='redes' alt="instagram" src= {Instagram}/></a>
                <a  href='https://web.whatsapp.com//' ><img className='redes' alt="whatsapp" src= {Whatsapp}/></a>
                </div>
            </div>
          </div>

      </footer>
  )
}

export default Footer
