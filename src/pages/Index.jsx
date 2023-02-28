import React from 'react'

// Import layout
import Layout from './includes/layouts/Layout'

export default function Index() {
  const meta = {
    title: "Welcome",
    description: [ "A multidisciplinary creative studio specializing in campaigns, brands, and spaces." ]
  }

  return (
    <Layout pageMeta={meta}>
        <div className='welcome'>
          <div className='welcome-container'>
            <div class='intro container-lg'>
              <div class='intro-inner'>
                <div className='intro-title'>
                  <h1 className='intro-title-first'>Latten</h1>
                  <h1 className='intro-title-second'>Creative</h1>
                </div>
                <div className='intro-desc'>
                  <p>A multidisciplinary creative studio specializing in web development, design, and branding.</p>
                </div>
                <div className='intro-action'>
                  <a href='/' className='lc-btn'>Lets Collab</a>
                </div>
              </div>
            </div>
            <div className='line'></div>
            <div className='welcome-mission container'>
              <div className='welcome-mission-inner'>
                <h2>Our Mission</h2>
                <p>Our mission is to collaborate and create beautiful things with creative people from around the world. Our goal is to showcase the best in creative design in regards to branding, website development and more. Let's create arts, and the next big thing!</p>

                <div className='welcome-information row'>
                  <div className='welcome-information-block col-lg-4 col-md-6 col-sm-6'>
                    <div className='welcome-information-block-inner'>
                      <h2>Services</h2>
                      <p>We provide professional creative design services including planning, UI/UX design, Web Development and Branding. We're here to create are in the form of animations, designs, and code.</p>
                    </div>
                  </div>
                  <div className='welcome-information-block col-lg-4 col-md-6 col-sm-6'>
                    <div className='welcome-information-block-inner'>
                      <h2>Tech We Use</h2>
                      <p>We use the latest in Web Technology such as React.js, Node.js, JavaScript, and more. Whatever your needs are we can make it happen. We pride ourselves on using the latest and greatest.</p>
                    </div>
                  </div>
                  <div className='welcome-information-block col-lg-4 col-md-6 col-sm-6'>
                    <div className='welcome-information-block-inner'>
                      <h2>Apps we use</h2>
                      <p>When it comes to code we make use of Visual Studio Code and it's many extensions. But when it comes to graphic and UI/UX design we make use of Photoshop and Illustrator. The good stuff</p>
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
