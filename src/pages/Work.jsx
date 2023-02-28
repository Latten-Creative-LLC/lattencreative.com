import React from 'react'
import Marquee from "react-fast-marquee";

// Include layout
import Layout from './includes/layouts/Layout';

export default function Work() {
  const meta = {
    title: "Work",
    description: [ "Learn more about Latten Creative and our mission" ]
  }

  return (
    <Layout pageMeta={meta}> 
        <div className='work-page'>
          <div className='work-page-inner'>
            <div className='work-welcome container'>
              <div className='welcome-upper'>
                <h1>Work</h1>
              </div>
              <div className='welcome-lower'>
                <p>We take pride in our work and what we create for other brands and artists. Below is just a few of our best projects</p>
              </div>
            </div>
            <div className='line'></div>
            <div className='work-page-main'>
              <div className='work-page-main-inner container'>
                <div className='work-page-main-row row'>
                  <div className='work-page-main-left col-lg-4'>
                    <div className='work-page-linear-case case-one' style={{backgroundImage: "url('/images/case_studies/st_pierre/cover_image.webp')"}}>
                      <a href='https://saintpierre.world/'>
                        <div className='work-page-linear-case-inner'>
                          <div className='top-category'>
                            <ul>
                              <li>Development</li>
                              <li>UI/UX</li>
                              <li>Branding</li>
                            </ul>
                          </div>

                          <div className='bottom-title'>
                            <h2>St. Pierre</h2>
                            <p>An underground Ohio fashion brand</p>
                          </div>
                        </div>  
                      </a>
                    </div>
                  </div>
                  <div className='work-page-main-right col-lg-8'>
                  <div className='work-page-horizontal-case case-one' style={{backgroundImage: "url('/images/case_studies/jameslatten/cover_image.png')"}}>
                      <a href='https://jameslatten.com/'>
                        <div className='work-page-horizontal-case-inner'>
                          <div className='top-category'>
                            <Marquee gradient={false} speed={100}>
                              <h3 className='featured'>Featured Project</h3>
                            </Marquee>

                            <ul>
                              <li>Development</li>
                              <li>UI/UX</li>
                            </ul>
                          </div>

                          <div className='bottom-title'>
                            <h2>James Latten</h2>
                            <p>Portfolio website for James Latten</p>
                          </div>
                        </div>
                      </a>  
                    </div>

                    <div className='work-page-horizontal-case case-one' style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}}>
                      <a href='https://lattentechnologies.com/'>
                        <div className='work-page-horizontal-case-inner'>
                          <div className='top-category'>
                            <ul>
                              <li>Development</li>
                              <li>UI/UX</li>
                              <li>Branding</li>
                            </ul>
                          </div>

                          <div className='bottom-title'>
                            <h2>Latten Technologies, LLC</h2>
                            <p>An underground Ohio fashion brand</p>
                          </div>
                        </div>
                      </a>  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  )
}
