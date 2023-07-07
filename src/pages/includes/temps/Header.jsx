import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

  const nav = {
    'Packages' : { title: 'Packages', url: '/packages' },
  } 

  return (
    <header className='website-header'>
        <div className='website-header-inner container-lg'>
            <div className='row'>
                <div className='website-header-branding col-lg-4 col-md-4 col-sm-12'>
                    <h2>
                        <Link to='/'>
                            <img src='/images/logo-lc-black-solid.png' alt='Logo' />
                        </Link>
                    </h2>
                </div>

                <div className='website-header-navigation col-lg-8 col-md-8 col-sm-12'>
                    <nav className='header-navigation-main'>
                        <ul>
                            <li><Link to='/'><sub>01</sub> Home</Link></li>
                            <li><Link to='/packages'><sub>02</sub> Packages</Link></li>
                            <li><Link to='/about'><sub>03</sub> About</Link></li>
                            <li><Link to='/work'><sub>04</sub> Work</Link></li>
                            <li><Link to='/contact'><sub>05</sub> Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

