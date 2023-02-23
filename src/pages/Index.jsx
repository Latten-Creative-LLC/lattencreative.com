import React from 'react'

// Import layout
import Layout from './includes/layouts/Layout'


export default function Index() {
  const meta = {
    title: "Home",
    description: [ "This is a test" ]
  }

  return (
    <Layout pageMeta={meta}>
        <div>Index</div>
    </Layout>
  )
}
