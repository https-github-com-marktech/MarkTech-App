import React from 'react'
import './footer.css'

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
                </div>
            </div>
          </div>

      </footer>
  )
}

export default Footer
