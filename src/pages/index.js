import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import moment from 'moment'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Loader from '../components/loader'
import Twitter from '../components/twitter'

import L from 'leaflet'
import { Marker } from 'react-leaflet'
import { promiseToFlyTo, getCurrentLocation } from '../components/map/lib/util'
import Map from '../components/map'

const Index = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  const LOCATION = {
    lat: 3.1390,
    lng: 101.6869
  }
  const CENTER = [LOCATION.lat, LOCATION.lng]
  // const DEFAULT_ZOOM = 6
  // const ZOOM = 10

  // const timeToZoom = 2000
  // const timeToOpenPopupAfterZoom = 4000
  // const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000

  const popupContentHello = `<h3 class="font-weight-light">Hello 👋</h3>`
  const popupContentGatsby = `
    <h4 class="font-weight-light">This is a public service announcement 📣</h4>
    <p class="font-weight-light my-0"><span class="font-weight-bold">Please stay home!</span> We all have a role to play to prevent the spread of germs within our communities— to protect ourselves, our families, and those at higher risk.</p>
  `

  const markerRef = useRef()

  async function mapEffect({ leafletElement } = {}) {
    if ( !leafletElement ) return

    const popup = L.popup({
      maxWidth: 300
    })

    const location = await getCurrentLocation().catch(() => LOCATION )

    const { current = {} } = markerRef || {}
    const { leafletElement: marker } = current

    marker.setLatLng( location )
    popup.setLatLng( location )
    popup.setContent( popupContentHello )

    setTimeout( async () => {
      await promiseToFlyTo( leafletElement, {
        zoom: 10, //ZOOM
        center: location
      })

      marker.bindPopup( popup )

      setTimeout(() => marker.openPopup(), 4000 ) //timeToOpenPopupAfterZoom
      setTimeout(() => marker.setPopupContent( popupContentGatsby ), 7000 ) //timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000
    }, 2000 ) //timeToZoom
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: 'OpenStreetMap',
    zoom: 6, //DEFAULT_ZOOM
    mapEffect
  }

  useEffect(() => {
    axios.get('https://api.coronatracker.com/v3/stats/worldometer/country?countryCode=MY')
      .then(response => {
        setLoading(false)
        setData(response.data[0])
      })
      .catch(error => {
        setError(true)
      })
  }, [])
  return (
    <Layout>
      <SEO />
      
      <section className="jumbotron bg-light mb-0">
      { loading ? (
        <Loader />
      ) : error ? (
        <div className="container px-md-5 text-center" role="alert">
          <h4><strong>Holy corona!</strong> Something break!</h4>
          <p>Remain calm and stay safe. You can still check out the tweets!</p>
        </div>
      ) : (
        <div className="container px-md-5 text-center">
          <img src={`https://www.countryflags.io/${data.countryCode}/flat/64.png`} alt={data.country} />
          <h1>{data.country}</h1>

          <div className="d-flex justify-content-center">
            <p className="small text-secondary mb-4">Data updated {moment(data.lastUpdated).fromNow()}</p>
          </div>

          <div className="d-flex justify-content-center">
            <h2 className="font-weight-light">Overall</h2>
          </div>

          <div className="row">
            <div className="col">
              <p>Case<br />
                <span className="text-info h1">{data.totalConfirmed}</span><br />
                <span className="text-info">&#43; {data.dailyConfirmed}</span>
              </p>
            </div>
            <div className="col">
              <p>Recovered<br /><span className="text-success h1">{data.totalRecovered}</span></p>
            </div>
            <div className="col">
              <p>Death<br />
                <span className="text-danger h1">{data.totalDeaths}</span><br />
                <span className="text-danger">&#43; {data.dailyDeaths}</span>
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <h2 className="font-weight-light">Today</h2>
          </div>

          <div className="row">
            <div className="col">
              <p>Active<br /><span className="text-info h1">{data.activeCases}</span></p>
            </div>
            <div className="col">
              <p>Critical<br /><span className="text-warning h1">{data.totalCritical}</span></p>
            </div>
          </div>
        </div>
      )}
      </section>

      <Map {...mapSettings}>
        <Marker ref={markerRef} position={CENTER} />
      </Map>

      <Twitter />
    </Layout>
  )
}

export default Index