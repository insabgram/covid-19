import React from 'react'

class Loader extends React.Component {
  render() {
    return (
      <div className="w-100 text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

export default Loader