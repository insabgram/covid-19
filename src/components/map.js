import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Map = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )
  return (
    <section className="container-fluid location">
      <div className="row">
        <div className="col p-0">
          <div className="embed-responsive embed-responsive-21by9">
            <iframe className="embed-responsive-item" width="1200" height="900" id="gmap_canvas" src="https://maps.google.com/maps?q=malaysia&t=&z=5&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" title={data.site.siteMetadata.description}></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Map