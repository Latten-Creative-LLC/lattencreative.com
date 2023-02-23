import React from 'react'
import Helmet from "react-helmet"

// Import templates
import Header from '../temps/Header';
import Footer from '../temps/Footer';

// Import .ENV vars
const app_name = process.env.REACT_APP_NAME;
const app_full_name = process.env.REACT_APP_FULL_NAME;
const app_url = process.env.REACT_APP_URL;

const app_version = process.env.REACT_APP_VERSION;
const app_build = process.env.REACT_APP_BUILD;

const app_keywords = process.env.REACT_APP_KEYWORDS;
const app_author = process.env.REACT_APP_AUTHOR;
const app_charset = process.env.REACT_APP_CHARSET;

const Layout = ({pageMeta, children}) => {
  return (
    <>
        <Helmet>
            <title>{ `${ app_name } | ${ pageMeta.title }` }</title>

            <meta charset={ app_charset } />
            <meta name="description" content={ pageMeta.description } />
            <meta name="keywords" content={ app_keywords} />
            <meta name="author" content={ app_author } />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Helmet>
        <div className='website'>
            <Header />

            <section className='website-inner'>
                {children}
            </section>

            <Footer url={ app_full_name }/>
        </div>
    </>
  )
}

export default Layout;