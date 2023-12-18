import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
   <>
   <div className='parent'>
  <div className='header'>
  <Image src="/assets/Brand Logo - Nexsales.png" alt="me" width="150" height="40"/>
  
  </div>

  <div className='sidebar-navigation'>
    <div className='navigation'>
     
      <div className='navitem-home'>
        <div className='home'>
        <Image src="/assets/Home Icon.png" alt="me" width="28" height="28"/>

        </div>
        <div className='tam'>
        <Image src="/assets/second.png" alt="me" width="28" height="28"/>
        </div>
        <div className='sam'>
        <Image src="/assets/third.png" alt="me" width="28" height="28"/>
          
        </div>
        <div className='cfa'>
        <Image src="/assets/fourth.svg" alt="me" width="28" height="28"/>
          
        </div>
        <div className='icp'>
        <Image src="/assets/fourth.svg" alt="me" width="28" height="28"/>
          
        </div>
        <div className='icon-frame'>
        <Image src="/assets/last.svg" alt="me" width="28" height="28"/>
          
        </div>
      
      </div>
    </div>
  </div>
   
    

   </div>
   <div className='child'>
   <div className="child1">
            <div className="heading">
              <div className="heading-part">
                <h3>Admin Dashboard</h3>
                <p>
                  Effortlessly Manage, Monitor and Modify: Your control center
                  for seamless oversight and optimization.
                </p>
                <div className="header-button">
                  <a href="#">Users</a>
                  <a href="#">Requests</a>
                  <hr></hr>
                </div>
              </div>
            </div>
          </div>

      <div className="container">
          <div className="matric-items">
            <div className="matric-item">
              <div className="card">
                <div className="card-detail">
                  <p>Sign up Initiated</p>
                </div>
                <div className="numbers">
                  <span>56</span>
                </div>
              </div>
            </div>
            <div className="matric-item">
              <div className="card">
                <div className="card-detail">
                  <p>Sign up Initiated</p>
                </div>
                <div className="numbers">
                  <p>56</p>
                </div>
              </div>
            </div>
            <div className="matric-item">
              <div className="card">
                <div className="card-detail">
                  <p>Sign up Initiated</p>
                </div>
                <div className="numbers">
                  <span>56</span>
                </div>
              </div>
            </div>
            <div className="matric-item">
              <div className="card">
                <div className="card-detail">
                  <p>Sign up Initiated</p>
                </div>
                <div className="numbers">
                  <span>56</span>
                </div>
              </div>
            </div>
          </div>
          </div>
   </div>
   </>
  )
}

export default page
