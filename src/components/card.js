import React from 'react'
import Loader from './loader'

function Card({ title, handle }) {
  return (
    <div className="px-3 py-4">
      <div className="card border-0 shadow">
        <div className="card-header bg-transparent border-bottom-0 d-flex justify-content-between align-items-center p-2">{title} <i className="material-icons small">swap_vert</i></div>
        <a className="twitter-timeline p-2" 
          href={`https://twitter.com/${handle}?ref_src=twsrc%5Etfw`} 
          data-height="400" 
          data-chrome="noheader nofooter noborders noscrollbar">
          <Loader />
        </a>
        <div className="card-footer bg-transparent border-top-0 d-flex justify-content-between align-items-center p-2"><a className="text-uppercase small" href={`https://twitter.com/${handle}`} target="_blank" rel="noopener noreferrer">View on Twitter</a> <i className="material-icons small">swap_horiz</i></div>
      </div>
    </div>
  )
}

export default Card