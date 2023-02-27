import React from 'react'

// Include Layout
import Layout from './includes/layouts/Layout'

export default function About() {
  const meta = {
    title: "About",
    description: [ "This is a test" ]
  }

  return (
    <Layout pageMeta={meta}>
        <div className='about-us-page'>
          <div className='about-us-page-inner'>
            <div className='about-us-page-welcome container'>
              <div className='welcome-upper'>
                <h1>About Us</h1>
              </div>
              <div className='welcome-lower'>
                <p>Our mission is to collaborate and create beautiful things with creative people from around the world. Our goal is to showcase the best in creative design in regards to branding, website development and more. Let's create the next big thing!</p>
              </div>
            </div>
            <div className='line'></div>
            <div className='about-us-page-main'>
              <div className='about-us-page-main-inner container'>
                <div className='about-us-page-main-row row'>
                  <div className='about-us-page-main-left col-lg-3'>
                    <div className='about-us-page-main-left-inner'>
                      <h2>Outline</h2>

                      <div className='outline-block'>
                        <h2>Team</h2>
                        <ul>
                          <li><a href='https://jameslatten.com'>James Latten - Founder/Dev</a></li>
                          <li><a href='https://larryalesley.com'>Larry Lesley - UI/UX</a></li>
                        </ul>
                      </div>
                      <div className='outline-block'>
                        <h2>Social</h2>

                        <ul>
                          <li><a href='https://twitter.com/lattencreative'>Twitter</a></li>
                        </ul>
                      </div>
                      <div className='outline-block'>
                        <h2>Contact</h2>

                        <ul>
                          <li><a href='mailto:business@lattencreative.com'>business@lattencreative.com</a></li>
                          <li><a href='tel:2168897822'>216-889-7822</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='about-us-page-main-right col-lg-9'>
                    <div className='about-us-page-main-right-inner'>
                      <div className='upper-quote'>
                        <h1>Creativity is seeing what others see and thinking what no one else ever thought</h1>
                        <h3>- Albert Einstein</h3>

                        <div className='line-sm'></div>

                        <div className='bottom-our-story'>
                          <p>We were founded early 2023 with a goal of creating the next big thing and collaborating with brands and artists and building out their visions. Our passion is taking Creativity to the next level and creating beautiful representations of artists, brands and companies alike! We're passionate about art and the creativity and story behind it. We take pride in our art, which is created in Code, Graphics and Animations. Our studio is always looking forward to working with the next big upcoming artist, or a new clothing brand, or businesses who are wanting to express themselves in a new way.</p>
                          <p>Latten Creative is a huge supporter of black owned/minority companies, brands and artists. We're a virtual black owned comapny thats based in Lorain, Ohio. We decided on being virtual so all of our employees and contractors can enjoy a remote enviroment and it allows us to be of use for brands, artists and more around the world. We embrace many cultures and kinds of people and ensure that each and every person we work with or employ feels as if they're safe and have an ally on their side.</p>
                        </div>
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
