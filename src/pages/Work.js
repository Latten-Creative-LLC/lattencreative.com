import React from 'react'
import Marquee from "react-fast-marquee";

// Include layout
import Layout from './includes/layouts/Layout';

export default function Work() {
  const meta = {
    title: "Work",
    description: [ "Learn more about Latten Creative and our mission" ]
  }

  const caseStudies = [
    {
      title: "James Latten",
      image: "images/case_studies/jameslatten/cover_image.png",
      link: "https://jameslatten.com"
    },
    {
      title: "Sitelyft Studios, LLC",
      image: "images/case_studies/sitelyftstudios/cover_image.png",
      link: "https://sitelyftstudios.com"
    },
    {
      title: 'Saint Pierre',
      image: "images/case_studies/st_pierre/cover_image.png",
      link: "https://saintpierre.store"
    },
    {
      title: "PHNTM Labs",
      image: "images/case_studies/phntm/cover_image.png",
      link: "https://phntmlabs.com"
    },
    {
      title: 'Lnkrr',
      image: "images/case_studies/lnkrr/cover_image.png",
      link: "https://lnkrr.com"
    },
    {
      title: "Latten Technologies, LLC",
      image: "images/case_studies/lattentechnologies/cover_image.png",
      link: "https://lattentechnologies.com"
    },
  ]

  return (
    <Layout pageMeta={meta}> 
        <div className='work-page'>
          <div className='work-page-inner'>
            <div className='work-welcome container-lg'>
              <div className='welcome-upper'>
                <h1>Work</h1>
              </div>
              <div className='welcome-lower'>
                <p>We take pride in our work and what we create for other brands and artists. Below is just a few of our best projects</p>
              </div>
            </div>
            <div className='line'></div>
            <div className='work-page-main'>
              <div className='work-page-main-inner'>
                <div className='case-studies'>
                  <div className='case-studies-inner'>
                    <div className='case-studies-grid'>
                      <div className='case-studies-grid-inner' style={{paddingTop: 0}}>
                        {caseStudies.map((caseStudy, index) => (
                          <div className='case-studies-grid-item' key={index} style={{backgroundImage: `url(${caseStudy.image})`}}>
                            <div className='case-studies-grid-item-inner'>
                              <div className='case-studies-grid-item-title'>
                                <h3>{caseStudy.title}</h3>
                                <a href={caseStudy.link}>View Here</a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
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
