import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <h1
              className="has-text-weight-bold is-size-1"
              style={{
                display: 'flex',
                justifyContent: 'start',
                alignItems: 'center',
                height: 150,
                marginBottom: 20,
                color: 'white',
                padding: '1rem',
              }}
            >
              Latest Stories
            </h1>
            <div className="content" style={{minHeight: '80vh'}}>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
