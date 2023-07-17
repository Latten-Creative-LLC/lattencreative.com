import React from 'react'

// Include Layout
import Layout from './includes/layouts/Layout'

export default function Packages() {
  const meta = {
    title: "Packages",
    description: [ "These are our packages our clients choose from. Need something more custom? Don't worry!" ]
  }

  return (
    <Layout pageMeta={meta}>
        <div className='about-us-page'>
          <div className='about-us-page-inner'>
            <div className='about-us-page-welcome container-lg'>
              <div className='welcome-upper'>
                <h1>Packages</h1>
              </div>
              <div className='welcome-lower'>
                <p>We provide 4 basic packages to you and your brand! But what if you need something more custom? Don't fret, contact us now and let's come up with a great plan that'll suit your brands needs.</p>
              </div>
            </div>
            <div className='line'></div>
            <div className='about-us-page-main'>
                <div className='packages container-lg'>
                    <div className='packages-inner row'>
                        {/* Package 1 */}
                        <div className='package'>
                            <div className='package-inner'>

                                <div className='package-title'>
                                    <h2>Small Website</h2>
                                </div>
                                <div className='package-desc'>
                                    <p>A small 4 page website W/ a Blog</p>
                                </div>
                                <div className='package-items'>
                                    <ul>
                                        <li>4 Pages</li>
                                        <li>Website</li>
                                        <li>Branding</li>
                                        <li>UI/UX Design</li>
                                        <li>SEO</li>
                                        <li>Free Domain</li>
                                        <li>Free Hosting</li>
                                    </ul>
                                </div>
                                <div className='package-action'>
                                    <a href='https://calendly.com/lattencreative/30min' className='lc-btn'>Get Started</a>
                                </div>
                            </div>
                        </div>

                        {/* Package 1 */}
                        <div className='package'>
                            <div className='package-inner'>

                                <div className='package-title'>
                                    <h2>Large Website</h2>
                                </div>
                                <div className='package-desc'>
                                    <p>A large 10+ page website W/ a Blog</p>
                                </div>
                                <div className='package-items'>
                                    <ul>
                                        <li>10+ Pages</li>
                                        <li>Website</li>
                                        <li>Branding</li>
                                        <li>UI/UX Design</li>
                                        <li>SEO</li>
                                        <li>Free Domain</li>
                                        <li>Free Hosting</li>
                                    </ul>
                                </div>
                                <div className='package-action'>
                                    <a href='https://calendly.com/lattencreative/30min' className='lc-btn'>Get Started</a>
                                </div>
                            </div>
                        </div>

                        {/* Package 1 */}
                        <div className='package'>
                            <div className='package-inner'>
                                <div className='package-title'>
                                    <h2>Online Shop</h2>
                                </div>
                                <div className='package-desc'>
                                    <p>An online shop with unlimited pages Including a Blog</p>
                                </div>
                                <div className='package-items'>
                                    <ul>
                                        <li>Unlimited Pages</li>
                                        <li>Ecommerce</li>
                                        <li>Branding</li>
                                        <li>UI/UX Design</li>
                                        <li>SEO</li>
                                        <li>Free Domain</li>
                                        <li>Free Hosting</li>
                                    </ul>
                                </div>
                                <div className='package-action'>
                                    <a href='https://calendly.com/lattencreative/30min' className='lc-btn'>Get Started</a>
                                </div>
                            </div>
                        </div>

                        {/* Package 1 */}
                        <div className='package' id="main_package">
                            <div className='package-inner'>

                                <div className='package-title'>
                                    <h2>Custom</h2>
                                </div>
                                <div className='package-desc'>
                                    <p>Need something more custom? We got you</p>
                                </div>
                                <div className='package-items'>
                                    <ul>
                                        <li>Unlimited Pages</li>
                                        <li>Website</li>
                                        <li>Branding</li>
                                        <li>UI/UX Design</li>
                                        <li>SEO</li>
                                        <li>Free Domain</li>
                                        <li>Free Hosting</li>
                                    </ul>
                                </div>
                                <div className='package-action'>
                                    <a href='https://calendly.com/lattencreative/30min' className='lc-btn'>Get Started</a>
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