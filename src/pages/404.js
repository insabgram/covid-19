import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <section className="jumbotron text-center">
          <div className="container">
            <h1>Not Found</h1>
            <p className="lead text-muted mb-0">Uh oh, you just hit a route that doesn&#39;t exist... the sadness.</p>
          </div>
        </section>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    allSitePage(filter: {path: {regex: "/^((?!404|post).)*$/"}}) {
      nodes {
        path
      }
      totalCount
    }
    site {
      siteMetadata {
        title
      }
    }
  }  
`
