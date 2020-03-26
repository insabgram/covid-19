import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Chart from 'react-google-charts'

const Map = () => {
  const [error, setError] = useState(false)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('https://corona.lmao.ninja/countries/malaysia')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        setError(true)
      })
  }, [])
  return (
    <Chart
      className="img-fluid"
      width={'100%'}
      height={'auto'}
      chartType="GeoChart"
      data={[
        ['Country', 'Case', 'Today'],
        [data.country, data.cases, data.todayCases]
      ]}
      options={{
        region: 'MY',
        colorAxis: { colors: '#17a2b8' },
        tooltip: { trigger: 'focus' }
      }}
      // data={[
      //   ['Latitude', 'Longitude', 'Location', 'Case'],
      //   [3.132716, 101.683538, 'Menara UEM', 1],
      //   [3.1906183, 101.7326796, 'Wisma Felcra', 10],
      //   [3.079986, 101.593863, 'Subang Jaya Medical Centre', 3]
      // ]}
      // options={{
      //   region: 'MY',
      //   displayMode: 'markers',
      //   colorAxis: { minValue: 0, maxValue: 1796, colors: ['#17a2b8', '#ffc107', '#dc3545'] },
      //   magnifyingGlass: { enable: true },
      //   markerOpacity: 0.5,
      //   tooltip: { trigger: 'focus' }
      // }}
      mapsApiKey="API_KEY_HERE"
      // rootProps={{ 'data-testid': '1' }}
    />
  )
}

export default Map