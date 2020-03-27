import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  return (
    <>
      {children}
      <footer className="footer mt-auto py-3 bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md">
              <span className="d-inline small text-uppercase text-muted">&#10033; Made with &#9825; by {data.site.siteMetadata.author}</span>
              <small className="d-block text-muted">{data.site.siteMetadata.description}</small>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer